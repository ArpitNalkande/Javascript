// function newFunction(){
//     return document.getElementById('para').innerHTML="Good Morning";
// }


// document.write(5+5);
// window.print();

// var r =45;
// var k = 5;


// newFun=()=>{
//     return console.log(r+k);
// }

// console.log(newFun());


// var r = 23;
// var k =29;

// console.log(r+k);



// var k = 5*5;
// console.log(k);


// var k = 5**3;
// console.log(k);

// let c = null ;
// console.log(typeof(c));
// console.log(c);

// let c = undefined ;
// console.log(typeof(c));
// console.log(c);

// let c  ;
// console.log(typeof(c));
// console.log(c);


// DATE IN JS

// console.log(Date());

// FUNCTIONS

// function demoClick(){
//     return console.log("danny");
// }
// demoClick();

// ARROW FUNCTION 

// demoClick=()=>console.log("good job");
// demoClick();

// OBJECTS IN JS



const obj = {
    carName:"Thar",
    carColor:"Black",
    carCompany:"Mahindra"
};

console.log(obj);
console.log(obj.carColor);


// STRINGS IN JS


let hello = "string";

console.log(hello.length);


 /////////

const str = "hello \"brother\" what are you doing";
console.log(str);


let str2 = "ar,pi, t";
console.log(str2.slice(3));

console.log(str2.indexOf("pi"));

// ARRAYS IN JS 

const arr = ["jay","shree","ram"];

console.log(arr[0]);


// const ab = arr.sort();
// console.log(ab);

console.log(arr.reverse());



//  arr.map() method takes another fuction as an argument  

const arr1 = [23,54,12,9];
test = (x) =>{
    return x+10;
}

console.log(arr1.map(test));


const arrobj  = [
        {
            car:"Thar",
            Color:"Black"
        }
];

nFun=(x)=>{
   return  x.car;
}

// function nFun(x){
//     return x;
// }

console.log(arrobj.map(nFun));

console.log(Math.random());

// TRY CATCH BLOCK

// if(a>b){
//     console.log("hello");
// }

// try {
//     if(a>b){
//         console.log("hello");
//     };
// } catch (error) {
//     console.log(error);
// }


// HOISTING IN JAVASCRIPT 


hoisTing();

if(a>b){
    console.log("ok");
}
else{
    console.log("okk")
}

// hoisTing=()=>console.log("what is hoisting ");

function hoisTing(){
    return console.log("hello");
}

let a = 28;
let b =98;

// we can acces variable which is declare using 
// VAR key word only not CONST or not by LET key word 













