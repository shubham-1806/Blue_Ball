function generateRandom(min,max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}

let score=0;

const score_obj=document.querySelector('#score');

function draw_spike(){
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.fillStyle = 'red';
    for(let j= 0 ; j<=canvas.width ;j+=60){
        ctx.lineTo(j+30,30);
        ctx.lineTo(j+60,0);
        ctx.fill();
        ctx.moveTo(j+60,0)
    }
    ctx.fill();
}

document.addEventListener('keypress', (event) => {
    if(event.code == "KeyA"){
        left_press= 1;
    }
    else if(event.code == "KeyD"){
        right_press = 1;
    }
}, false);

document.addEventListener('keyup', (event) => {
    if(event.code == "KeyA"){
        left_press= 0;
    }
    else if(event.code == "KeyD"){
        right_press = 0;
    }
  }, false);



const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d')

let ball_touching =0;

let right_press = 0;
let left_press = 0;

function Circle(x,y,r,c) {
    this.x=x;
    this.y=y;
    this.r=r;
    this.c=c;

    this.dy = 2;

    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x,this.y,this.r,0,Math.PI * 2);
        ctx.fill();
    }

    this.animate = function () {
        this.y+=((!ball_touching)*this.dy + ball_touching*(-2))
        let true_left=0;
        let true_right=0;
        if(this.x>=this.r+5){
            true_left=1;
        }
        if(this.x<=canvas.width-5-this.r){
            true_right=1;
        }
        this.x+=(true_left*left_press*(-5)+true_right*right_press*5);
        if(this.y<= (this.r+30) || this.y>=canvas.height-this.r){
            clearInterval(kk);
            draw_spike();
            swal({
                type: 'warning',
                title: "Game Over",
                text: `Total Score : ${score}`, 
                confirmButtonText: 'Okay!!'
            }).then((result)=>{
                clearAnimationFrame(draw_ball);
                
            })
        }
        else{
            let flag=false;
            for(let k=0;k<platform_arr.length ; k++){
                if(this.x>= platform_arr[k].x && this.x <= platform_arr[k].x+300){
                    if( (this.y+this.r) >= platform_arr[k].y && (this.y+this.r) <= platform_arr[k].y+10){
                        if((!(ball_touching))==1){
                            ball_touching=1;
                        }
                        flag=true;
                        break;
                    }
                }
            }
            if(flag==false){
                ball_touching=0;
            }
            this.draw();
        }
    }
}

let ball = new Circle(40,70,30,'red');

function draw_ball() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ball.animate();
    requestAnimationFrame(draw_ball);
}


var platform_arr =[]

platform_arr.push(new platform(0,canvas.height))


function platform(x,y) {
    this.x=x;
    this.y=y;
    this.w=300;
    this.h=10;

    this.dy = -2;

    this.draw = function(){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x,this.y,this.w,this.h);
        draw_spike();
    }

    this.animate = function () {
        this.y+=this.dy
        if(this.y<=30){
            platform_arr.splice(platform_arr.indexOf(this),1)
        }
        else{
            this.draw()
        }
    }
}

function draw_plat() {
    for (let i =0 ;i < platform_arr.length ; i++){
        platform_arr[i].animate();
    }
    requestAnimationFrame(draw_plat);
}

function add_plat(){
    platform_arr.push(new platform(generateRandom(0,canvas.width-302),canvas.height))
}

kk = setInterval(function(){
    add_plat();
    score+=20;
    score_obj.textContent=String(score);
},1000)

function init () {
    draw_ball();
    draw_plat();  
}

init();


