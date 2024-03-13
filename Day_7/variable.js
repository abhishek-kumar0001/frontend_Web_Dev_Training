// difference between var, let and const

// var
var a = 10;
var b = 20
console.log("Global var a: ",a);
console.log("Global var b: ",b);

function fn1(){
   
    {
        var a = 8;
        var b = 16
    }
    console.log("Outer var a: ",a);
    console.log("Outer var b: ",b);


    function fn2(){
        {
            a = 80;
            b = 90;
        }
        console.log("Inner var a: ",a);
        console.log("Inner var b: ",b);    
    }
    fn2();
    
}
fn1();
console.log("Global var a: ",a);
console.log("Global var b: ",b);




// let

function fn3(){
    let x = 1;
    let y = 2;
    console.log("Outer let x: ",x);
    console.log("Outer let y: ",y);
    function fn4(){
        {
            let x = 5;
            let y = 5;
        }
        console.log("inner let x: ",x);
        console.log("inner let y: ",y);
    }
    fn4();

}
fn3()


// const

function fn5(){
    const x = 1;
    const y = 2;
    console.log("Outer const x: ",x);
    console.log("Outer const y: ",y);
    function fn6(){
        {
            const x = 5;
            const y = 5;
        }
        console.log("inner const x: ",x);
        console.log("inner const y: ",y);
    }
    fn6();
}
fn5()
