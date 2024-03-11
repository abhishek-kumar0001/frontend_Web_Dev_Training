// variable declaration automatically
x = 5;
y = 6;
z = x + y;
console.log(z);

// variable declaration by using var keyword
var x = 6; //assign the value 6 into x
var y = 7; //assign the value 7 into y
var z = x + y; // addition operator adds x and y
console.log(z);

// variable declaration by using let keyword
let a = 7;
let b = 8;
let c = x + y;
console.log(c);

// variable declaration by using const keyword
const price1 = 200;
const price2 = 300;
let total = price1 + price2;
console.log(total)

// we can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// we can change an element:
cars[0] = "Toyota";

// we can add an element:
cars.push("Audi");
console.log(cars);

//we can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// we can change a property:
car.color = "red";

// we can add a property:
car.owner = "Johnson";
console.log(car);