$('#set_variables_form').submit(function (e) {
  e.preventDefault();
  mp = $('#mass1').val();
  mass = $('#mass2').val();
  k1 = $('#k1').val();
  Theta1 = $('#Theta1').val()/180*(Math.PI);
  x1 = parseInt($('#x1').val());
  l1 = parseInt($('#l1').val());
  d2Theta1 = 0;
  dTheta1  = 0;
  d2x1 = 0;
  dx1  = 0;

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

function drawSpring(myLine, context) {
  context.beginPath();
  context.moveTo(0, Y0);
  const scale = 0.8 * (Math.sin(time) + 1.3);

  for(let x = 0; x < myLine.x; x++) {
    // Sine wave equation
    let y = (mass / 4) * Math.sin(x/3) + Y0 ;
    context.lineTo(x, y);
  }
  context.strokeStyle = 'blue';
  context.stroke();
}

function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context) {
  d2x1 = ((mp * Math.sin(Theta1))*(l1 * dTheta1 *dTheta1 + g * Math.cos(Theta1)) - k1 * (x1 - offset)) / (mp + mass - mp * Math.cos(Theta1) * Math.cos(Theta1));
  d2Theta1  = - ( d2x1 * Math.cos(Theta1) + g * Math.sin(Theta1))/ (l1);
  dx1 += d2x1*time;
  dTheta1 += d2Theta1*time;
  x1 += dx1 * time;
  Theta1 += dTheta1*time;



  myCircle1.x = x1 + l1*Math.sin(Theta1);
  myCircle1.y = Y0+l1*Math.cos(Theta1);

  myCircle2.x = x1;

  myLine1.x  = myCircle1.x;
  myLine1.y  = myCircle1.y;
  myLine1.x0 = x1;

  myLine2.x = myCircle2.x;
  myLine2.y = myCircle2.y;


  context.clearRect(0, 0, canvas.width, canvas.height);

  drawLine(myLine1, context);
  drawSpring(myLine2, context);
  drawCircle(myCircle1, context);
  drawCircle(myCircle2, context);
}

//Physics Constants
let d2Theta1 = 0;
let dTheta1  = 0;
let d2x1 = 0;
let dx1  = 0;
let Theta1   = 0*(Math.PI)/2;
let x1     = 300.0;
let offset = 250;
let l1    = 150.0;
let g      = 9.8;
let time   = 0.05;
let mp = 10;
let mass = 10;
let k1 = 200;

let canvas  = document.getElementById('myCanvas');
let X0     = x1;
let Y0     = (canvas.width) / 4;
let context = canvas.getContext('2d');
let init    = {};

function run(){
  let myLine1 = {x0: X0, y0: Y0, x: 0, y: 0};
  let myLine2 = {x0: 100, y0: Y0, x: x1, y: 0};
  let myCircle1 = {x: X0+l1*Math.sin(Theta1), y: Y0+l1*Math.cos(Theta1), mass: mp};
  let myCircle2 = {x: X0, y: Y0, mass: mass};

  clearInterval(init);
  context.clearRect(0, 0, canvas.width, canvas.height);
  init = setInterval(function(){
    animate(myCircle1, myCircle2 , myLine1, myLine2, canvas, context);
  }, 0.01);
}
