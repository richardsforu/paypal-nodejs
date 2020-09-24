/*
console.log('.... index.js ');


var a;
a=100;

a="Test";

//=================

var a=200;
//=================

let x=10;

x=200;

let x=300;

*/

// Functions, Arrays and Objects

// Objects

// 1. const

//const x=100;
//x=200;

/*
const x="Abc"; // primitive type

function test(data){
    data="Xyz"; // call by value 
    console.log(data);
}

test(x);

*/

/*

// Default scope for js is global scope
// Note: Every Java Script function executed in its own scope. (scope name is function name)


function order(amt){
   // console.log(arguments.length)
   console.log('Biryani');
}


function order(){
    if(arguments.length===0)
    console.log('No Biryani');
    else
    console.log("Biryani");
}

//order(200);



var a=200; // global scope

function test(){// test scope
    var a=100; //  a is from test scope
    console.log(a);
}

//test();


let x=100;
let y=100;

if(x===y){
    console.log("Equal");
}else{
    console.log("Not equal");
}

*/

//==================================
// function with ES-5 
/*
function test(){
    console.log("---- Hello");
}

test();

*/

//=================================

// function with ES-6

/*
const test=()=>{
    console.log("--- test function");
}

test();

*/

/*

// ES-5
function test(x){
 return x;
}

let val=test(10000);

*/


/*
// ES-6
let test=(x)=> x;

let x=test(14);
*/
//======================

// JSON Obj
let emp1={
id:1024,
name:'Praveen',
salary:45000
};

// ES5
//let salary=emp1.salary;


//ES6 Destruring
let{salary,name,id}=emp1;

// Spread operator

// normal array concat() method 
//let arr = [1,2,3]; 
//let arr2 = [4,5]; 
  
//arr3 = arr.concat(arr2); 
  
//console.log(arr); // [ 1, 2, 3, 4, 5 ] 


/*
let a1=[];
a1.push(10); // Mutable assignment
a1.push(20);
a1.push(30);

// assign data of an array with immutability (cancat)

let a2=[];
let v1=a2.concat(10);
let v2=v1.concat(20);
*/


// spread operator doing the concat job 
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr3 = [...arr,100,200,...arr2]; 
//console.log(arr3); // [ 1, 2, 3, 100, 200, 4, 5 ] 




let emps=[
    {id:1,name:'Abc',salary:10000},
    {id:2,name:'Xyz',salary:20000},
    {id:3,name:'Abb',salary:30000}
];

emps=[...emps,{id:4,name:'Acc',salary:40000}]


for(let emp of emps){
    //console.log(emp);
}


// es5 class creations

function Customer(){

    console.log("--- executed only once");
  
    let d1=()=>{
        console.log("--- d1");
    }

   let d2=(a)=>{
        console.log("--- d2");
   }

   let d3=(a,b)=>{
       console.log("--- d3");
       return a+b
   }

   return {
       d1:d1,
       d2:d2,
       d3:d3
   }

}

//let {d1,d2,d3} = Customer();


// class
class Per1{
constructor(){
    console.log('.. Per1 const');
}
}

class Per extends Per1{
    constructor(x){
        super();
        this.x=x;
        console.log('--- constructor :: '+x);
    }

    d1(){
        console.log('---d1');
    }
    
    d2(){
        console.log('... d2');
    }

    d3(){
        console.log('d3 :: x: '+this.x);
    }

}

//let p1=new Per(1000);
//let p2=new Per(2000);

//let a=100;
//a=false;
















