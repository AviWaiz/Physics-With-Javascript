$('#set_variables_form').submit(function (e) {
  e.preventDefault();
  console.log($('#mass1').val());
  m1     = $('#mass1').val();
  k1     = $('#k1').val();
  Theta1   = $('#Theta1').val()/180*(Math.PI);
  r   = parseInt($('#r').val());
  d2Theta1 = 0;
  dTheta1  = 0.02;
  d2r = 0;
  dr  = - 0.01;

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
  d2r = (r * dTheta1 * dTheta1) - k1 / (r * r);
  d2Theta1  =  - 2 * (dr * dTheta1) / r;
  dr   += d2r*time;
  dTheta1   += d2Theta1*time;
  r += dr * time;
  Theta1    += dTheta1*time;

  // console.log(k1);
  // console.log(r);
  // console.log(Theta1);

  myCircle1.x = X0+r*Math.sin(Theta1);
  myCircle1.y = Y0+r*Math.cos(Theta1);

  myLine1.x  = myCircle1.x;
  myLine1.y  = myCircle1.y;


  context.clearRect(0, 0, canvas.width, canvas.height);

  drawLine(myLine1, context);
  drawCircle(myCircle1, context);
}

//Physics Constants
let d2Theta1 = 0;
let dTheta1  = 0.02;
let d2r = 0;
let dr  = - 0.01;
let Theta1   = 0*(Math.PI)/2;
let r     = 50.0;
let l1    = 50.0;
let time   = 0.5;
let m1 = 10;
let k1 = 1000;

let canvas  = document.getElementById('myCanvas');
let X0     = canvas.width / 2;
let Y0     = (canvas.width) / 2;
let context = canvas.getContext('2d');
let init    = {};

function run(){
  let myLine1 = {x0: X0, y0: Y0, x: 0, y: 0};
  let myCircle1 = {x: X0+r*Math.sin(Theta1), y: Y0+r*Math.cos(Theta1), mass: m1};

  clearInterval(init);
  context.clearRect(0, 0, canvas.width, canvas.height);
  init = setInterval(function(){
    animate(myCircle1, myLine1,canvas, context);
  }, 0.1);
}
