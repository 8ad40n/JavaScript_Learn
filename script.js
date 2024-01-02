function demoDate()
{
    document.getElementById('demo').innerHTML=Date();
}
function lightTurnOn()
{
    document.getElementById("light").src="images/pic_bulbon.gif";
}
function lightTurnOff()
{
    document.getElementById("light").src="images/pic_bulboff.gif";
}

// JavaScript can "display" data in different ways:

// 1. Writing into an HTML element, using innerHTML.
// 2. Writing into the HTML output using document.write().
// 3. Writing into an alert box, using window.alert().
// 4. Writing into the browser console, using console.log().

function displayInnerHTML()
{
    document.getElementById("dis").innerHTML = 5 + 6;
}

// Using document.write() after an HTML document is loaded, will delete all existing HTML:
function displayDocumentWrite()
{
    document.write(5+5);
}
function displayAlert()
{
    window.alert(5+4);
    // or,
    // alert(5+4);
}
function displayConsole()
{
    console.log(5+3);
}

function printScreen()
{
    window.print();
}


// JavaScript Variables can be declared in 4 ways:

// 1. Automatically
// 2. Using var
// 3. Using let
// 4. Using const

// var can be redeclared but let can not be redeclared 
// const can not be reassigned
let person = "John Doe",
carName = "Volvo",
price = 200;

let x = "John" + " " + "Doe";

let y = "5" + 2 + 3;
console.log(y); //523

let z = 2 + 3 + "5";
console.log(z); //55

// Variables declared with the var always have Global Scope.




//     var a = 10;
//     // Here a is 10
//     {
//     var a = 2;
//     // Here a is 2
//     }
//     // Here a is 2




//     let a1 = 10;
//     // Here a1 is 10
//     {
//     let a1 = 2;
//     // Here a1 is 2
//     }
//     // Here a1 is 10



// Allowed:
//     carName = "Volvo";
//     var carName;



// Not Allowed:
//     carName = "Saab";
//     let carName = "Volvo";




// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

for(let i = 0; i<cars.length;i++)
{
    console.log(cars[i]);

}








// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";





