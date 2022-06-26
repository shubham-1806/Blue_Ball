function generateRandom(min,max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}

let ball_touching=0;

let right_key=0;
let left_key=0;

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-50;

canvas_stack = new CanvasStack('canvas');

var layer1=canvas_stack.createLayer();
var layer2=canvas_stack.createLayer();

const ctx_ball = document.getElementById(layer1).getContext('2d');
const ctx_plat= document.getElementById(layer2).getContext('2d');

let plats_map_y = new Map();

for(let i=0;i<=canvas.height;i++){
    plats_map_y.set(i,[-1]);
}


let grav=1;

let plat_speed=-1;

let right_speed = 1;

let left_speed = -1;

let ball=new Object()

ball.ox=40
ball.oy=40;
ball.r=20;



function drawplat(x,y,prev_x,prev_y){
    ctx_plat.clearRect(prev_x,prev_y, 300, 10);
    plats_map_y.set(prev_y,[-1]);
    ctx_plat.fillStyle = "#0095DD";
    ctx_plat.fillRect(x,y,300,10)
    let arr=[];
    for(let i=x;i<=x+300;i++){
        arr.push(i);
    }
    plats_map_y.set(y,arr);
}


function create_platform(x,y){
    let prev_x=x;
    let prev_y=y;
    drawplat(x,y,prev_x,prev_y);
    y+=plat_speed;
    moving_plat=setInterval(()=>{
        drawplat(x,y,prev_x,prev_y);
        prev_x=x;
        prev_y=y;
        y+=plat_speed;
        if(y<=0){
            clearInterval(moving_plat);
        }
    },5)
    let timeout_num=generateRandom(100,((canvas.height*5)/((-1)*plat_speed))-30)
    setTimeout(()=>{
        x_num=generateRandom(0,canvas.width-20);
        y_num=canvas.height;
        create_platform(x_num,y_num);
    },timeout_num)
}


function drawb(x,y) {
    ctx_ball.clearRect(0, 0, canvas.width, canvas.height);
    ctx_ball.beginPath();
    ctx_ball.arc(x, y, ball.r, 0, Math.PI*2);
    ctx_ball.fillStyle = "#0095DD";
    ctx_ball.fill();
    ctx_ball.closePath();
}


function draw_the_ball(dx,dy){
    moving_ball=setInterval(()=>{
        if(ball.oy<=ball.r || ball.oy>=canvas.height-ball.r){
            swal({
                title: "Game Over",
                icon: "error",
                button: "Go Back!!"
            }).then((result)=>{
                console.log("bye")
            })
        }
        drawb(ball.ox,ball.oy);
        ball.ox+=(dx+right_speed*right_key+left_key*left_speed);
        ball.oy+=(dy+grav*(!ball_touching)+plat_speed*ball_touching);
        if(plats_map_y.get((ball.oy+ball.r)).includes(ball.ox)){
            ball_touching=1;
        }
        else{
            ball_touching=0;
        }
    },5);
}

create_platform(20,canvas.height);

draw_the_ball(0,0);

document.addEventListener('keypress', (event) => {
    console.log("hi");
    var code = event.code;
    if(code==37){
        left_key=1;
    }
    else if(code==39){
        right_key=1;
    }
});

