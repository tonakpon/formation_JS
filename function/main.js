function add(x, y) {
    let result = x + y;
    return result;
}
let answer = add(2, 6);
console.log(answer);
console.log(add(2, 6));


hello();
googbye();

function hello() {
    console.log("Hello!");
}

function googbye() {
    console.log("Googbye!");
}


const ages = [18, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element) {
    return element >= 18;
}

const person1 = {
    name: "Toto",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi I am ${this.name}`)}
}
person1.sayHello();

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 20.50);
const product3 = new Product("Underwear", 100.00);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);






class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    slepp(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimning`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.slepp();
rabbit.run();

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this.firstName = newFirstName;
        } else {
            console.log("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this.lastName = newLastName;
        } else {
            console.log("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge.length > 0) {
            this.age = newAge;
        } else {
            console.log("Age must be a non-empty number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lasttName(){
        return this._lasttName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebo", "Singapoor", 420, 69,);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);