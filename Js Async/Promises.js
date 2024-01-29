// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code

function myDisplayer(some) {
    console.log(some);
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );