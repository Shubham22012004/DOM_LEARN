//objects LECTURE-16
/*
const JsUser={
  name:"kai", //by default system take it as "name":"kai"
  age:64,
  "fulname":"kai hiwatari",
  location:"noida",
  lastLogin:["monday", "wed"]
  
}

console.log(JsUser.name)
console.log(JsUser["name"]);
console.log(JsUser["fulname"])//you can not access fullname using (.)

*/


//using symbol as a key
/*
const mySym = Symbol("key1")
const JsUser={
  name:"kai", //by default system take it as "name":"kai"
  age:64,
  mySym:"key",
  "fulname":"kai hiwatari",
  location:"noida",
  lastLogin:["monday", "wed"]
  
}

console.log(mySym)         //key
console.log(typeof mySym)   //String


//============right way=========

const mySym = Symbol("key1")
const JsUser={
  name:"kai", //by default system take it as "name":"kai"
  age:64,
  [mySym]:"key",
  "fulname":"kai hiwatari",
  location:"noida",
  lastLogin:["monday", "wed"]
}
console.log(JsUser[mySym])  //no quote

//if you do not want to change the value

Object.freeze(JsUser.fulname)


//LECTURE-17=====================================

const a= new Object()//singleton object
const b={}      //normal obhect declaration and it non-singleton object

b.id="4563fd"
b.name="kai"
console.log(b) //{ id: '4563fd', name: 'kai' } can decalare object inside object

//combining object
const obj1={1:"a",2:'b'}
const obj2={3:'c',4:'d'}
console.log(obj1+obj2)//[object Object][object Object]
let obj3={obj1,obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


//Object.assign(target, source)
let obj4=Object.assign({},obj1,obj2)//all value save in empty object
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
let obj5=Object.assign(obj1,obj2)
console.log(obj5)
console.log(obj1)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } all value store in obj1 also

//shorthan of assign

let obj={...obj1, ...obj2}

console.log(Object.keys(obj))//array of keys
console.log(Object.values(obj))//array of values
console.log(obj.hasOwnProperty("world"))//return type boolean
*/

// ============destructruing of arraya==================

const course={
  coursename:"js in hindi",
  price:856,
  Instructor:"hitesh"
}
const {Instructor:i}=course
console.log(i)//hitesh
console.log(Instructor)//throw error

const {Instructor}=course
console.log(Instructor)//hitesh



