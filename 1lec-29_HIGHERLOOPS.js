const arr = [1,2,3,4,5,6]
//for of loop  => for(let iterator of array)
for(const i of arr){console.log(i)};

let name="hello world";
for(let i of name){
  console.log(i);
}

//MAPS -> work same as object
const map=new Map() //object hold kay value pair, A key only occur once
map.set("in","india")
map.set("fra","France")
console.log(map)//Map(2) { 'in' => 'india', 'fra' => 'France' }

map.set("in","india")//on log { 'in' => 'india', 'fra' => 'France' }  No duplicate key

for(const key of map){
  console.log(key)
}//[ 'in', 'india' ] [ 'fra', 'France' ]

for(const [key,value] of map){
  console.log(key,value)//control key and value separately  this can not work for object
}

//for accessing the object we use FOR...IN loop
const obj={1:'a',2:'b',3:"d"}
for(const i in obj){//i refers to key
console.log(i)//1  2  3 
console.log(obj[i])//a b c
}

//if we use FOR... IN loop on array it will return the index on place of key  and we can iterate on MAP 

//forEACH LOOP  => never return any value show undefined
const arr1=[1,2,4,5,9,8,5,6]
arr1.forEach(function (val){
  console.log(val);//print whole array
})

arr1.forEach((item)=>{//it accept fn
  console.log(item);//print whole array
})

//you can pass the function in forEach to
function printME(val){
  console.log(val);
}
arr1.forEach(printME)//always give the reference not execute the fn
//execute  arr1.forEach(printME())


arr.forEach((item, index, arr)=>{   })

//filter=======================  
//accept callback return new Arryay on true and false condition

const mynum=[1,2,3,4,5,6,7,8,9]
const newnum=mynum.filter((item)=>{
  return item%2==0;
})
console.log(newnum)//[ 2, 4, 6, 8 ]
const newnum1=mynum.filter((item)=>item>5)
console.log(newnum1)//[ 6, 7, 8, 9 ]

//MAP function=> return value for all ele

const mapnum = mynum.map((items)=>items+5)
console.log(mapnum)//[6,  7,  8,  9, 10, 11, 12, 13, 14]

//we can do chaining 
const w = mynum.
        map((item)=>item*10)
        .map((item)=>item+10)
console.log(w)//[20, 30, 40,  50, 60,  70, 80, 90, 100]  
//you can use other function too like filter forEach etc. in chainint

//REDUCE===========================
//arr.reduce((acc,curval)=>{}) curval hols current value of arr and acc hold result

  const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  3,
)//whatever we give in initial value it will store in acc for one time only next time return value store in accumulator;

console.log(sumWithInitial);//13 if initialValue=3
// Expected output: 10 if initialValue=0