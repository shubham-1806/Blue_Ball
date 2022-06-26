
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_stack = new CanvasStack('canvas');

var layer1=canvas_stack.createLayer();
var layer2=canvas_stack.createLayer();

const ctx_ball = document.getElementById(layer1).getContext('2d');
const ctx_plat= document.getElementById(layer2).getContext('2d');


let grav=10;

let ball=new Object()

ball.ox=canvas.width/2;
ball.oy=canvas.height/2;
ball.r=20;

ctx_plat.fillRect(80,80,80,80);

function draw(x,y) {
    ctx_ball.clearRect(0, 0, canvas.width, canvas.height);
    console.log()
    if(y==ball.r || y==canvas.height-ball.r){
        swal({
            title: "Game Over",
            icon: "error",
            button: "Go Back!!",
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
        draw(ball.ox,ball.oy);
        ball.ox+=(dx+grav);
        ball.oy+=(dy+grav);
    },10)
}

draw_the_ball(2,2);



