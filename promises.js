/*Promises are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never. Promises help manage asynchronous code in a cleaner, more readable way compared to callbacks, especially when dealing with sequences of async operations.


A Promise has three states:

Pending – initial state, neither fulfilled nor rejected.

Fulfilled – the operation completed successfully.

Rejected – the operation failed.

*/

// if you create a promise then you have to create something which consume promise

//how promise made,
const promiseOne = new Promise(function(resolve,reject){
  //Do any async task
  //DB calls, cryptography, network

  setTimeout(function(){
    console.log('Async task is complete');
    resolve();//resolve is necessary to run the .then() function if you do not write it then() will not execute, you can pass the parameter in resolve()
    //resolve has relation with .then and reject have with catch()
  },1000)
})

promiseOne.then(function(){
  console.log("Promise consumed");
})



//second one
new Promise(function(resolve,reject){//no need to save in variable
  setTimeout(function(){
    console.log("Async function 2");
    resolve();
  },1000)
}).then(function(){
  console.log("async function 2 resolve");
})


//third one
const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({name:"kai", age:24});
  },1000)
})
promiseThree.then(function(user){//this means that the values taken by resolve() work as parameter for .then(function(arg))
  console.log(user);
})

//fourth one
const promiseFourth = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username:"kai", password:"123"})//you can pass what you want like file etc.
    }else{
      reject("error something went wrong");
    }
  },1000);
})

/*
let username = promiseFourth.then((user)=>{
  console.log(user);
  return user.username;
})
console.log(username;) //this is wrong
*/
promiseFourth.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
  console.log(username);
}).catch((err) => {
  console.log("error occurred : ", err);
})//if error=true(in promiseFourth func) it return value and =false the return "error something wrong"
.finally(()=>{//coompulsary to execute
  console.log("the promise is either resolved or rejected");
})


//promise Five = we can handle promise using async and await
const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username:"kai", password:"123"})//you can pass what you want like file etc.
    }else{
      reject("error Js went wrong");
    }
  },1000);
})

async function consumePromiseFive(){
  try{
  const response = await promiseFive;//promiseFive is an object so we do not use ()
  console.log(response);
  }
  catch(err){
    console.log(err);
  }
}
consumePromiseFive();

//async function
async function getAllUser(){
  let user = await fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())//response.json() helps turn the messy letter into a clean list
  .then(json => console.log(json))//Print the list of users on the screen!”
  .catch(err => {
    console.log(err);
  })
  console.log(user);
}

getAllUser();
/*another way
async function getAllUser() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();//await use here as it take time to convert in json
  console.log(data);
}
getAllUser();
*/