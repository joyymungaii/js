// arithmetic operators

//  = ==> assignment operator
// *
// /

// comparison

//  == && != ==> compares value only
let x = 10;
let y = "10";
let z = 20;

// console.log(x==y);
// === && !== compare value and data type
// console.log(x===y);

// && AND
//console.log(x===y && x<z);
// || OR
 //console.log(x===z || x<z || y===x);

// conditional statements
let age = 118;
// if statement

//if(age > 17 && age!==18){
// code to be executed if True
//console.log("old enough to drive")
//}
//else if(age === 18){
//console.log("ready for driving lesson")
//} 
//else{
//console.log('not old enough to drive')
//}
// switch statement

//if (age > 0 && age <= 17) {
  //console.log("give allowance");
//} 
//else if ((age) >= 18 && age <= 22) {
  //console.log("stipend");
//} 
//else if ((age) >= 23 && age <= 65) {
  //console.log("salary");
//} 
//else if (age > 65) {
  //console.log("pension");
//} 
//else{
  //console.log('invalid age');
//}



const ageInput = document.getElementById("age");
const submitButton = document.getElementById("submit");
const errorMessage = document.getElementById("error-message");

submitButton.addEventListener("click", () => {
  const age = parseInt(ageInput.value);
  if (age >0 && age <= 17) {
    errorMessage.textContent = "You must be at least 18 years old to continue.";
  } 
  else if (age >= 18){
    errorMessage.textContent = "Access Granted!!";
  } 
  else {
    errorMessage.textContent = "Invalid Age";
  }
});

//functions

//function name(parameter1, parameter2, parameter3) {
  // code to be executed
//}
// Function is called, the return value will end up in x
//let x = myFunction(4, 3);

//function myFunction(a, b) {
// Function returns the product of a and b
  //return a * b;
  //answer=12
//}

//the ball
//const canvas = document.getElementById('myCanvas');
//const ctx = canvas.getContext('2d');

//const ball = {
  //x: canvas.width / 2,
  //y: canvas.height - 30,
  //radius: 20,
  //speed: 2,
  //dx: 2,
  //dy: -2
//};

//function drawBall() {
  //ctx.beginPath();
  //ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
  //ctx.fillStyle = '#333';
  //ctx.fill();
  //ctx.closePath();
//}

//function updateBall() {
  //ball.x += ball.dx * ball.speed;
  //ball.y += ball.dy * ball.speed;

  //if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    //ball.dy = -ball.dy;
  //}

  //if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    //ball.dx = -ball.dx;
  //}
//}

//function animate() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  //drawBall();
  //updateBall();
  //requestAnimationFrame(animate);
//}

//animate();

//another way of writing if statement

age >18 ? 'old enough' : age <12 ? '': ''

