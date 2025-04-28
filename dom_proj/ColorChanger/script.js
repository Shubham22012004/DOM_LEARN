
let button = document.querySelectorAll('.btn');
let body = document.querySelector('body');

console.log(button);

button.forEach(function (btn){
  console.log(btn);
  btn.addEventListener('click',(event)=>{
    console.log(event);
    console.log(event.target);
    if(event.target.id=== 'btn1'){
      body.style.backgroundColor = "orange";
    }
    else if(event.target.id === 'btn2'){
      body.style.backgroundColor = "blue";
    }
    else if(event.target.id === 'btn3'){
      body.style.backgroundColor = "green";
    }
    else if(event.target.id === 'btn4'){
      body.style.backgroundColor = "yellow";
    }
  })
})









/*
function changeColor(color){
  document.body.style.backgroundColor = color;
}
*/