let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Entrer vôtre pseudo");
    password = window.prompt("Entrer vôtre mot de passe");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("Vous êtes connectés");
    } else {
        console.log("Vous mot de passe est invalide");
    }
}