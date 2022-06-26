
function generateRandom(min,max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}


const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_stack = new CanvasStack('canvas');

var layer1=canvas_stack.createLayer();
var layer2=canvas_stack.createLayer();

const ctx_ball = document.getElementById(layer1).getContext('2d');
const ctx_plat= document.getElementById(layer2).getContext('2d');



let grav=10;

let plat_speed=-2;

let ball=new Object()

ball.ox=40
ball.oy=40;
ball.r=20;


function drawplat(x,y,prev_x,prev_y){
    ctx_plat.clearRect(prev_x,prev_y, 300, 10);
    ctx_plat.fillStyle = "#0095DD";
    ctx_plat.fillRect(x,y,300,10)
}


function create_platform(x,y){
    let prev_x=x;
    let prev_y=y;
    moving_plat=setInterval(()=>{
        drawplat(x,y,prev_x,prev_y);
        prev_x=x;
        prev_y=y;
        y+=plat_speed;
        if(y<=0){
            clearInterval(moving_plat);
        }
    },10)
    let timeout_num=generateRandom(100,((canvas.height*10)/((-1)*plat_speed))-30)
    setTimeout(()=>{
        x_num=generateRandom(0,canvas.width-20);
        y_num=canvas.height;
        create_platform(x_num,y_num);
    },timeout_num)
}


function drawb(x,y) {
    ctx_ball.clearRect(0, 0, canvas.width, canvas.height);
    if(y<=ball.r || y>=canvas.height-ball.r){
        swal({
            title: "Game Over",
            icon: "error",
            button: "Go Back!!"
        }).then((result)=>{
            console.log("bye")
        })
    }
    ctx_ball.beginPath();
    ctx_ball.arc(x, y, ball.r, 0, Math.PI*2);
    ctx_ball.fillStyle = "#0095DD";
    ctx_ball.fill();
    ctx_ball.closePath();
}


function draw_the_ball(dx,dy){
    moving_ball=setInterval(()=>{
        drawb(ball.ox,ball.oy);
        ball.ox+=(dx+grav);
        ball.oy+=(dy+grav);
    },10)
}

draw_the_ball(2,2);
create_platform(20,canvas.height);



