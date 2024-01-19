"use strict";
const canvas=document.getElementById("canvas1");
const canvasWidth=canvas.width=640;
const canvasHeight=canvas.height=480;
const ctx=canvas.getContext("2d");
let size=25;
let x=canvasWidth*0.5-(size*0.5);
let y=canvasHeight*0.5-(size*0.5);
let speedX=5;
let speedY=2;
const body =document.getElementById("body");

body.addEventListener("mousedown",function(events){ //Anonymous Function
    console.log(events);
    if(events.button===0) {
        const mouseX = events.offsetX;
        const mouseY = events.offsetY;
        

        const angle = Math.atan2(mouseY - y, mouseX - x);
        speedX = Math.cos(angle) * 5; // You can adjust the speed here
        speedY = Math.sin(angle) * 5;


    }
})

let color;


function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    x=x+speedX;
    y=y+speedY;

   
    //Hitting right side wall
    if(x>=canvas.width-size){
        speedX=-speedX; //x=x-speedX
        canvas.style.left=`55%`;
        color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

    }

    //Hitting left side wall
    else if (x<=0) {
        speedX=-speedX; //x=x+speedX
        canvas.style.left=`50%`;
        color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;


    }

    //Hitting the floor
    if (y>=canvas.height-size) {
        speedY=-speedY;
        canvas.style.top=`55%`;
        color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;


    }

    //Hitting the roof
    else if(y<=0){
         speedY=-speedY;
         canvas.style.top=`50%`;
         color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;


        }
    ctx.fillStyle=color;
    ctx.beginPath()
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
    // ctx.fillRect(x,y,size,size);
    requestAnimationFrame(animate);

}

animate();

    


