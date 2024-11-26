const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
/* myBox.addEventListener("click", function(even){
    even.target.style.backgroundColor ="tomato";
    even.target.textContent = "OUCH! 😟";
}); */ 

myButton.addEventListener("click", even => {
    myBox.style.backgroundColor ="tomato";
    myBox.textContent = "OUCH! 😟";
}); 

myButton.addEventListener("mouseover", even => {
    myBox.style.backgroundColor ="yellow";
    myBox.textContent = "Don't do it 😮";
}); 

myButton.addEventListener("mouseout", even => {
    myBox.style.backgroundColor ="lightgreen";
    myBox.textContent = "Click Me 😀";
}); 
