// // function generateRandom(min,max) {
// //     let difference = max - min;
// //     let rand = Math.random();
// //     rand = Math.floor( rand * difference);
// //     rand = rand + min;
// //     return rand;
// // }

// // let ball_touching=0;

// // let right_key=0;
// // let left_key=0;

// // const canvas = document.getElementById('canvas');
// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight-50;

// // canvas_stack = new CanvasStack('canvas');

// // var layer1=canvas_stack.createLayer();
// // var layer2=canvas_stack.createLayer();

// // const ctx_ball = document.getElementById(layer1).getContext('2d');
// // const ctx_plat= document.getElementById(layer2).getContext('2d');

// // let plats_map_x = new Map();

// // for(let i=0;i<=canvas.width;i++){
// //     plats_map_x.set(i,[-1]);
// // }


// // let grav=1;

// // let plat_speed=-1;

// // let right_speed = 1;

// // let left_speed = -1;

// // let ball=new Object()

// // ball.ox=40
// // ball.oy=40;
// // ball.r=20;



// // function drawplat(x,y,prev_x,prev_y){
// //     ctx_plat.clearRect(prev_x,prev_y, 300, 10);
// //     plats_map_x.set(prev_x,[-1]);
// //     ctx_plat.fillStyle = "#0095DD";
// //     ctx_plat.fillRect(x,y,300,10)
// //     let arr=[];
// //     for(let i=x;i<=x+300;i++){
// //         arr.push(i);
// //     }
// //     plats_map_y.set(y,arr);
// // }


// // function create_platform(x,y){
// //     let prev_x=x;
// //     let prev_y=y;
// //     moving_plat=setInterval(()=>{
// //         drawplat(x,y,prev_x,prev_y);
// //         prev_x=x;
// //         prev_y=y;
// //         y+=plat_speed;
// //         if(y<=0){
// //             clearInterval(moving_plat);
// //         }
// //     },5)
// //     let timeout_num=generateRandom(100,((canvas.height*5)/((-1)*plat_speed))-30)
// //     setTimeout(()=>{
// //         x_num=generateRandom(0,canvas.width-20);
// //         y_num=canvas.height;
// //         create_platform(x_num,y_num);
// //     },timeout_num)
// // }


// // function drawb(x,y) {
// //     ctx_ball.clearRect(0, 0, canvas.width, canvas.height);
// //     ctx_ball.beginPath();
// //     ctx_ball.arc(x, y, ball.r, 0, Math.PI*2);
// //     ctx_ball.fillStyle = "#0095DD";
// //     ctx_ball.fill();
// //     ctx_ball.closePath();
// // }


// // function draw_the_ball(){
// //     moving_ball=setInterval(()=>{
// //         if(ball.oy<=ball.r || ball.oy>=canvas.height-ball.r){
// //             swal({
// //                 title: "Game Over",
// //                 icon: "error",
// //                 button: "Go Back!!"
// //             }).then((result)=>{
// //                 console.log("bye")
// //             })
// //         }
// //         drawb(ball.ox,ball.oy);
// //         ball.ox+=(right_speed*right_key+left_key*left_speed);
// //         ball.oy+=(grav*(!ball_touching)+plat_speed*ball_touching);
// //         for(let j=0;j<=ball.r;j++){
// //             if(plats_map_y.get((ball.oy+j)).includes(ball.ox)){
// //                 ball_touching=1;
// //             }
// //             else{
// //                 ball_touching=0;
// //             }
// //         }
// //     },5);
// // }

// // create_platform(0,canvas.height);

// // draw_the_ball();

// // document.addEventListener('keypress', (event) => {
// //     var code = event.code;
// //     if(code==65){
// //         left_key=1;
// //     }
// //     else if(code==68){
// //         right_key=1;
// //     }
// // });



// function generateRandom(min,max) {
//     let difference = max - min;
//     let rand = Math.random();
//     rand = Math.floor( rand * difference);
//     rand = rand + min;
//     return rand;
// }

// let ball_touching=0;

// let right_key=0;
// let left_key=0;

// const canvas = document.getElementById('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// canvas_stack = new CanvasStack('canvas');

// var layer1=canvas_stack.createLayer();
// var layer2=canvas_stack.createLayer();

// const ctx_ball = document.getElementById(layer1).getContext('2d');
// const ctx_plat= document.getElementById(layer2).getContext('2d');

// let plats_map = new Array();

// let grav=1;

// let plat_speed=-0.5;

// let right_speed = 1;

// let left_speed = -1;

// let ball=new Object()

// ball.ox=40
// ball.oy=40;
// ball.r=20;



// function drawplat(x,y,prev_x,prev_y){
//     ctx_plat.clearRect(prev_x,prev_y, 300, 10);
//     ctx_plat.fillStyle = "#0095DD";
//     ctx_plat.fillRect(x,y,300,10)
// }


// function create_platform(x,y){
//     let prev_x=x;
//     let prev_y=y;
//     let first=1;
//     moving_plat=setInterval(()=>{
//         drawplat(x,y,prev_x,prev_y);
//         if(first==1){
//             arr = new Array();
//             arr.push(x);
//             arr.push(y);
//             plats_map.push(arr);
//         }
//         first=0;
//         prev_x=x;
//         prev_y=y;
//         y+=plat_speed;
//         if(y<=0){
//             clearInterval(moving_plat);
//         }
//     },1)
//     let timeout_num=generateRandom(100,((canvas.height)/((-1)*plat_speed))-30)
//     setTimeout(()=>{
//         x_num=generateRandom(0,canvas.width-20);
//         y_num=canvas.height-10;
//         create_platform(x_num,y_num);
//     },timeout_num)
// }


// function drawb(x,y) {
//     ctx_ball.clearRect(0, 0, canvas.width, canvas.height);
//     ctx_ball.beginPath();
//     ctx_ball.arc(x, y, ball.r, 0, Math.PI*2);
//     ctx_ball.fillStyle = "#0095DD";
//     ctx_ball.fill();
//     ctx_ball.closePath();
//     for(let j=0; j< plats_map.length;j++){
//         if(plats_map[j][1]<=10){
//             plats_map.splice(j,1);
//         }
//         else{
//             plats_map[j][1]+=plat_speed;
//         }    
//     }
// }


// function draw_the_ball(dx,dy){
//     moving_ball=setInterval(()=>{
//         if(ball.oy<=ball.r || ball.oy>=canvas.height-ball.r){
//             swal({
//                 title: "Game Over",
//                 icon: "error",
//                 button: "Go Back!!"
//             }).then((result)=>{
//                 console.log("bye")
//             })
//         }
//         drawb(ball.ox,ball.oy);
//         ball.ox+=(dx+right_speed*right_key+left_key*left_speed);
//         ball.oy+=(dy+grav*(!ball_touching)+plat_speed*ball_touching);
//         for(let j=0; j< plats_map.length;j++){
//             if((ball.oy-ball.r)>= plats_map[j][1] && (ball.oy+ball.r)<=plats_map[j][1]+10){
//                 if(ball.ox>= plats_map[j][0] && ball.ox<= plats_map[j][0]+300){
//                     ball_touching=1;
//                     break;
//                 }
//             }
//             else{
//                 ball_touching=0;
//             }
//         }
//     },1);
// }

// create_platform(20,canvas.height-10);

// draw_the_ball(0,0);


// // document.onkeydown = checkKey;

// // function checkKey(e) {

// //     e = e || window.event;
// //     if (e.keyCode == '37') {
// //        right_key=1;
// //     }
// //     else if (e.keyCode == '39') {
// //        left_key=1;
// //     }

// // }


function generateRandom(min,max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}


const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-50;

const ctx = canvas.getContext('2d')

let ball_touching =0;

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
        if(this.y<= this.r || this.y>=canvas.height-this.r){
            swal({
                title: "Game Over",
                icon: "error",
                button: "Go Back!!"
            }).then((result)=>{
                clearAnimationFrame(draw_ball);
                console.log("bye")
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

let ball = new Circle(40,40,30,'red');

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
    }

    this.animate = function () {
        this.y+=this.dy
        if(this.y<= this.h){
            platform.splice(platform_arr.indexOf(this),1)
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

setInterval(function(){
    add_plat();
},1000)

function init () {
    draw_ball();
    draw_plat();  
}

init();
