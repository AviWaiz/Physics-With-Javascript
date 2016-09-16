
$('#set_variables_form').submit(function (e) {
  e.preventDefault();
  console.log($('#mass1').val());
  m1     = $('#mass1').val();
  Theta1   = $('#Theta1').val()/180*(Math.PI);
  l1   = $('#l1').val();
  d2Theta1 = 0;
  dTheta1  = 0;
  run();
});

function drawCircle(myCircle, context) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.mass, 0, 2 * Math.PI, false);
  context.fillStyle = '#000';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'black';
  context.stroke();
}

function drawLine(myLine, context) {
  context.beginPath();
  context.moveTo(myLine.x0, myLine.y0);
  context.lineTo(myLine.x, myLine.y);
  context.strokeStyle = 'blue';
  context.stroke();
}

function animate(myCircle1, myLine1, canvas, context) {
  d2Theta1  =  (- g * (Math.sin(Theta1) ) / l1);
  dTheta1   += d2Theta1*time;
  Theta1    += dTheta1*time;

  myCircle1.x = X0+l1*Math.sin(Theta1);
  myCircle1.y = Y0+l1*Math.cos(Theta1);


  myLine1.x  = myCircle1.x;
  myLine1.y  = myCircle1.y;


  context.clearRect(0, 0, canvas.width, canvas.height);

  drawLine(myLine1, context);
  drawCircle(myCircle1, context);
}

//Physics Constants
let d2Theta1 = 0;
let dTheta1  = 0;
let Theta1   = 0*(Math.PI)/2;
let l1     = 150;
let g      = 9.8;
let time   = 0.05;
let m1 = 10;

let canvas  = document.getElementById('myCanvas');
let X0     = canvas.width / 2;
let Y0     = canvas.width / 2;
let context = canvas.getContext('2d');
let init    = {};

function run(){
  let myLine1 = {x0: X0, y0: Y0, x: 0, y: 0};
  let myCircle1 = {x: X0+l1*Math.sin(Theta1), y: Y0+l1*Math.cos(Theta1), mass: m1};

  clearInterval(init);
  context.clearRect(0, 0, canvas.width, canvas.height);
  init = setInterval(function(){
    animate(myCircle1, myLine1, canvas, context);
  }, 0.1);
}
