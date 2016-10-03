var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#33fbed";
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.shadowBlur = 15;
ctx.shadowColor = "#33dbed";

function degToRad(degree) {
  var factor = Math.PI/180;
  return degree * factor;
}

function gameLoop() {
  
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds + (milliseconds / 1000);
  
  //Background
  ctx.fillStyle = "#333333";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  //Hours
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15)-90));
  ctx.stroke();
  
  //Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-90));
  ctx.stroke();  
  
  //Seconds
  ctx.beginPath();
  ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds*6)-90));
  ctx.stroke();
  
  //Date
  ctx.font = "bold 22px Arial";
  ctx.fillStyle = "#33dbed";
  ctx.fillText(today, 175, 250);
  
  //Time
  ctx.font = "22px Arial";
  ctx.fillStyle = "#33dbed";
  ctx.fillText(time, 205, 295);
}

setInterval(gameLoop, 40);