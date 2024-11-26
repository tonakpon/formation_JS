

class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}
class Speciality extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpeciality = new Speciality("medium");
mySpeciality.slice();

/* class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize
        this.crust = "original";
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(toppings) {
        this.toppings.push(toppings);
    }
    bake() {
       console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sauvage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings()); */