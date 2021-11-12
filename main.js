canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent = "empty";
var lastX,lastY;
color = "red";
width=2;

canvas.addEventListener("mouseDown",my_mouseDown)

function my_mouseDown(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "my_mouseDown";
}

canvas.addEventListener("mouseUp",my_mouseUp)

function my_mouseUp(e){
mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
current_position_of_x = e.clientX - canvas.offsetLeft;
current_position_of_y = e.clientY - canvas.offsetTop;

if (mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(current_position_of_x ,current_position_of_y ,radius,0 ,2*Math.PI);
ctx.stroke();

console.log("last position of X = "+lastX+" and Y = "+lastY);
console.log("current position of X = "+current_x+" and Y = "+current_y);
}
lastX = current_position_of_x;
lastY = current_position_of_y;
}

function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}