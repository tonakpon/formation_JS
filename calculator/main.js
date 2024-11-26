// Calculator Programm

const dispay = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        dispay.value = eval(dispay.value);
    } catch (error) {
        dispay.value = "Error";
    }
}