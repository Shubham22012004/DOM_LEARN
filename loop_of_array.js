//higher order loops
// FOR OF
let a = [100,12,315,601,54,4];
for(let i of a){
  console.log(i);  //100 12 315 601 54 4 in new lines
}

let s="kai the fantastic worls";
for(let a of s){
  console.log(a);
}

//map in js ->Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1


// Maps can be iterated using the forEach() method: map in not iterable with other loops

contacts.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

//using for...Of loop
for(let [key, value] of contacts){
  console.log(key, " - ",value);
}

//object cna not not iterate by  FOR OF loop in can done by  FOR IN loop  if we use FOR IN loop on array we get the index of array

let b = [100,12,315,601,54,4];
for(let i in b){
  console.log(i);  //0 1 2 3 4 5
}

let obj={js:"javascript", cpp:"c++"}
for(let i in obj){
  console.log(i);  //return key
}

for(let key in obj){
  console.log(key,obj[key]);  //return key nand value 
}