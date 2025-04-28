let form = document.querySelector('form');
let result = document.querySelector('.result');

form.addEventListener("submit", function(event){
  event.preventDefault();//use to prevet the the submit of form to server 

  let weight=parseFloat(document.querySelector("#weight").value);//if we write this line outside the function then we do not get the value it will empty
  console.log("Weight ",weight);
  let height = parseFloat(document.querySelector("#height").value);//value =>  property is used to get or set the current value of an input, textarea, or select element in a form.
  console.log("height ", height);

  if(height==='' || height<=0 || isNaN(height)){
    result.innerHTML = "Please give a valid height";
  }
  if(weight==='' || weight<=0 || isNaN(weight)){
    result.innerHTML = "Please give a valid height";
  }
  else{
    let BMI = (weight/(height*height));
    result.innerHTML = `<span> ${BMI} </span>`
  }
})
