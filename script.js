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

var a = 28;
var b =98;


// let a = 28;
// let b =98;

// we can acces variable which is declare using 
// VAR key word only not CONST or not by LET key word 

// THIS KEY WORD IS JS 

const movie = {
    name:"RRR",
    rating:9.5,
    director:"S.S rajamouli",

    fun  : function(){
        return this.director;
    }
};



// JSON --> JAVASCRIPT OJECT NOTATION (Array of Object)


const obj2 = {

    "employees":[
        {"firstname":"radhe","lastname":"mohan"},
        {"firstname":"shyam","lastname":"mohan"},
        {"firstname":"mohan","lastname":"radhe"},
    ]
}

console.log(obj2.employees[1]);



// CALLBACK FUNCTION IN JS
// pasing function as an argument in another fuction 

function okBrother(){
    console.log("optimization");
}

function radhe(){
    console.log(5+5);
}

okBrother(radhe);

// const settt = setTimeout(
//     () => {
//     console.log("After 5000 miliseconds")
// }, 5000);


// const sett  = setTimeout(myfunction,6000);

// function myfunction(){
//     console.log("first");
// }


// PROMISES IN  JS            ---->(based on callback hell)

// IN 3 STEP 
// 1. Pending 
// 2. Fullfill
// 3. Rejected

//  THEN AND CATCH CONCEPT 

// if Fullfill then ( THEN )
// if rejected then ( CATCH )


const obj11 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
             let roll_no = [1,2,3,4,5];
            //  console.log("roll_no");
            resolve(roll_no);
            // reject("Error 404 Not Found");
    },1000);

});

// obj11.then((roll_no) => {
//     console.log(roll_no);
// }).catch((err) => {
//     console.log(err);
// });

// let raid = -1;
// const obj3 = new Promise((resolved,rejected)=>{
//     if(raid == -1){
//          raid = 2;
//     }
//     // resolved(raid);
//     rejected("Clean Cheet");
// });

// obj3.then(()=>{
//     console.log(raid);
// }).catch((error)=>{
//     console.log(error);
// })




// ASYNC AWAIT IN JS 
// if the function is declare with a key word async then it always return promise
// async function is used to get or fetch  the data from promises 
// it can be used as a replacement in THEN and CATCH BLOCK in promises 

// async function getElement(){
//     // const pp = await obj11;
//     console.log(await obj11);
// }

// getElement();




// FETCH API(Aplication Programming Interface)
// fetch() method is used to fetch the data from api 
// fetch() always returns promise 


// fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
// .then((alldata)=>{
//     // console.log(alldata);
//     return alldata.json();
// })
// .then((actualdata)=>{
//  const data = actualdata.MH.dates;
//  document.getElementById("demo").innerHTML = data;


// })
// .catch((error)=>{
//     console.log(error);
// })


// TEMPLATE LITERALS 
 

let ft  = "Arpit";
let ltn  = "Nalkande";
let fname =  `Full name  ${ft} ${ltn}`;

console.log(fname);


// SPREAD OPERATOR

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);


const car = {
    Color: "Red",
    Name: "Mustang",
    Brand: "Ford",
};

const car2 = {
    year:"2023",
    color:"yellow",
};

const combined = {...car,...car2};
console.log(combined);


// CLOSURE IN JS 
// IF THE INNER FUNCTION ACCESS THE PARAMETER/AURGUMENT OF OUPTER FUNCTION THEN IT CALLED AS CLOSURE 


function myFn(){
    let variable = "sarcastic";
    function myFn1(){
        console.log(variable);
    }
    myFn1();
}

myFn();



   











