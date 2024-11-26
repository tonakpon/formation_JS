const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultatElement = document.getElementById("resultatElement");
let age;

mySubmit.onclick = function (){
    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        resultatElement.textContent = `Vous avez tellement d'âge pour entrer sur ce site`;
    } else if (age == 0) {
        resultatElement.textContent = `Vous êtes née maintenant`;
    } else if (age >= 18) {
        resultatElement.textContent = `Vous avez l'âge pour entrer sur ce site`;
    } else if (age < 0) {
        resultatElement.textContent = `Non c'est faux`;
    }   
     else {
        resultatElement.textContent = `Vous devez avoir 18ans pour entrer sur ce site`;
    }
}
