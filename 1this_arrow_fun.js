//l-23
//closure -> when child function are able to access the parent function variable

console.log(one())//will not throw log undefined if we not return anything

function one(){
  const username="hitesh";

  function two(){
    const website="youtube";
    console.log(username);
  }
  two();
  
}

console.log(one())//will not throw print undefined


// console.log(addtwo())//will throw cannot access before initalization

const addtwo= function (num){ //function but also called expresstion
  return num+2;
}
console.log(addtwo(5))//will not throw and if we do not pass paramete it will show NaN

//L-24  this keyword

const user = {
  username:"hitesh",
  price:556,
  welcomeMsg : function (){
    console.log(`${this.username}`);
  }
}

user.welcomeMsg();  //hitesh
user.username="kai";
user.welcomeMsg();  //kai

console.log(this)  //{} when we try to run in node.js but when we try to run this command on browser window it will show all function of window object as window is a global object

function chai(){
  console.log(this);
}
chai(); //it will show all built-in-objects 

// =================ARROW FUNCTION ============

const addTwo=(num1, num2)=>{
  return num1+num2;
}
console.log(addTwo(3,5));//8

//implicit return arrow function => in this er do not write a return keyword
const addTwo1=(num1,num2)=>(num1+num2);

//if we use curley bracket then we have to use the return keywodl const addTwo(num1, num2)=>{return num1+num2; }

//return object
const fun=()=> {usename:"kai"}; //it will not return object wrong way 
console.log(fun())  //it will print undefined

const fun1=()=>({username:"kai"});
console.log(fun1()) //{ username: 'kai' }


// iifi => immediately invoked function
(function chai(){ //named iifi
  console.log("chai");
})();//this colon is important for two consecutive iifi

((name)=>{//unnamed iifi
  console.log(`${name}`);
})("hitesh");