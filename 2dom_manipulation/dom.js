let i=document.getElementById('DomId');
    function fun(){
    i.innerText="you are powerful";
  }

//log the id
console.log(document.getElementById('DomId').id)
//log the class
console.log(i.className)//not class

//getAttribute
console.log(i.getAttribute('id'))
console.log(i.getAttribute('class'))

//setAttribute => change the property of element setAttribute("prop_name","new_val")
console.log(i.setAttribute('class',"test_the_class"))//value change in element window of browser 

//adding css property
i.style.background="green";
i.style.borderRadius="50px";


console.log(i.innerText)//it will show the data which use to be show on web page  => output: DOM learning on chai or code

console.log(i.textContent)//it will show all the content which is hide using css  =>  output  : DOM learning on chai or code i am the js coder


console.log(i.innerHTML) //it gives the whole html format is we write the span tag in line it will show thant also  =>  output  DOM learning on chai or code <span style="display:none">i am the js coder</span>



let classSelector = document.getElementsByClassName('heading')


//querySelector
let ele=document.querySelector('ele')//select by element
let ele_id=document.querySelector('#ele_id')//select by id
let ele_class=document.querySelector('.ele_class')//select element by class                                                           
let input=document.querySelector('input')
let input_attribute=document.querySelector('input[type="password"]')
console.log(input_attribute) //<input type="password">

//we can selet all type of CSS selector 
//you can do chaining the querySelector
let myul = document.querySelector('ul')
let myli = myul.querySelector('li')
myli.style.backgroundColor="green";  //turn green to the first li of ul
myli.innerText="five";// change value one to five on browser

let myulAll = document.querySelectorAll('li')//return nodeList for each li and it is like array but not completely array,,  when we selectAll by element it return nodeList
//map function is absent of nodeList
myulAll[1].style.backgroundColor="red";//change backgroundcolor of second li as "1" is given, to red

myulAll.forEach(function (l){
  l.style.backgroundColor="blue";
})//all li background color blue

//HMTL collections
/*
HTMLCollection is what you get when selecting multiple elements using methods like:

getElementsByTagName()

getElementsByClassName()

element.children

It’s live, not a real array, and doesn’t support all array methods.

Use Array.from() if you need to treat it like a real array.
*/

let htmlColl = document.getElementsByClassName('BOX');//this is an html collection not array, when  ElementsByClassName() use remove (.) prefix
console.log(htmlColl)
//to use it like array convert it
let htmlArr = Array.from(htmlColl)
console.log(htmlArr) //now you can apply all property

htmlArr.forEach(function(li){
  li.style.color="orange";//change text color to orange
  console.log(li)
})