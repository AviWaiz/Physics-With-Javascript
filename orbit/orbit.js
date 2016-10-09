$('#set_variables_form').submit(function (e) {
  e.preventDefault();
  k1     = $('#k1').val();
  r   = parseInt($('#r').val());
  d2Theta1 = 0;
  dTheta1  = parseInt($('#dTheta1').val()) * 0.001 ;
  d2r = 0;
  dr  = - 0.01;

  run();
});

function drawCircle1(myCircle, context) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.mass /1.5, 0, 2 * Math.PI, false);
  context.fillStyle = 'blue';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'blue';
  context.stroke();
}
function drawCircle2(myCircle, context) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.mass, 0, 2 * Math.PI, false);
  context.fillStyle = '#ec7a30';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#ec7a30';
  context.stroke();
}

function drawLine(myLine, context) {
  context.beginPath();
  context.lineWidth = 3;
  context.moveTo(myLine.x0, myLine.y0);
  context.lineTo(myLine.x, myLine.y);
  context.strokeStyle = 'blue';
  context.stroke();
  context.closePath();

}

function animate(myCircle1, myLine1, canvas, context, count) {
  d2r = (r * dTheta1 * dTheta1) - k1 / (r * r);
  d2Theta1  =  - 2 * (dr * dTheta1) / r;
  dr += d2r*time;
  dTheta1   += (d2Theta1 * time);
  r += dr * time;
  Theta1 += dTheta1*time;

  if (count % 500 === 0 ) {
    myLine1.x0  = myCircle1.x;
    myLine1.y0  = myCircle1.y;
  }

  myCircle1.x = X0 + r*Math.sin(Theta1);
  myCircle1.y = Y0 + r*Math.cos(Theta1);

  myLine1.x  = myCircle1.x;
  myLine1.y  = myCircle1.y;


  context.clearRect(0, 0, canvas.width, canvas.height);
}

//Physics Constants
let d2Theta1 = 100;
let dTheta1  = 100;
let d2r = 0;
let dr  = - 0.01;
let Theta1   = 0*(Math.PI)/2;
let r     = 50.0;
let l1    = 50.0;
let time   = 0.001;
let m1 = 30;
let k1 = 100000;

let canvas  = document.getElementById('myCanvas');
let X0     = canvas.width / 2;
let Y0     = (canvas.width) / 2;
let context = canvas.getContext('2d');
let init    = {};

function run(){
  let myLine1 = {x0: X0+r*Math.sin(Theta1), y0: Y0+r*Math.cos(Theta1), x: 0, y: 0};
  let myCircle1 = {x: X0+r*Math.sin(Theta1), y: Y0+r*Math.cos(Theta1), mass: m1};
  let myCircle2 = {x: X0, y: Y0, mass: 2*m1};
  clearInterval(init);
  context.clearRect(0, 0, canvas.width, canvas.height);
  let count = 0;
  init = setInterval(function(){
    for (let  i = 0; i < 1000; i++) {
      animate(myCircle1, myLine1, canvas, context, count);
      if(count === 400000) count = 0;
      count += 1;
    }
    // drawLine(myLine1, context);
    drawCircle1(myCircle1, context);
    drawCircle2(myCircle2, context);
  }, 0.1);
}
