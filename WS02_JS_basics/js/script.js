console.log("Hello World!");

let name = "Lisette";
let age = 23;
let favoriteAnimal = "dog";

console.log(name);
console.log(age);
console.log(favoriteAnimal);

let userName = prompt("What is your name?");

alert("Hello " + userName + "!");

let userAge = prompt("How old are you?");
if (userAge >= 18) {
    alert("You are an adult!");
} else {
    alert("You are a minor!");
}

function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser(userName);
