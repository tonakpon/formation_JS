/* let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt(`Entrer le rayon du cercle`);
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference); */

let pi = 3.14159;
let radius;
let circumference;




document.getElementById("mySubmit").onclick = function (){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = `La surface du cercle est : ${circumference} cm`;
    //document.getElementById("myH3").textContent = circumference + "cm";
}