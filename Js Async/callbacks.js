// A callback is a function passed as an argument to another function.

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// myCalculator(5, 5, function(some){
//     console.log(some);
// });