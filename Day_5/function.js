//regular function
function hello(name){
    console.log(`Hello! ${name}`);
}
hello("Abhishek");

// function expression
let sum = function (num1,num2){
    let result = num1 + num2;
    console.log(result);
}
sum(10,20);

// Arrow function
let multiply = (a,b)=>{
    return a*b;
}

let mulVal = multiply(15,3);
console.log(mulVal);