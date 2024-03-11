// for loop
for(let i = 1; i<=10; i++){
    console.log(i);
}

// while loop
let a = 2;
while(a<=10){
    console.log(a);
    a += 2;
}

// do while loop
let j = 1;
do{
    console.log(j);
    j += 2
}while(j<=10);

// for of loop
let arr = ["Abhishek","Akash","Rajeev","Manish"];
for (const elm of arr) {
    console.log(elm);
}

// for in loop
let arr2 = [10,20,30,40,50];
for (const index in arr2) {
    console.log(arr2[index]);
}

const obj = {name:"Abhishek",age:20,mark:60}
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}