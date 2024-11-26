const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "conconut", color: "white", calories: 159},
                {name: "pineable", color: "green", calories: 37},];

/* fruits.splice(1, 2);

console.log(fruits); */

// forEach
fruits.forEach(fruit => console.log(fruit.name));

//filter
const yellowFruits = fruits.filter(fruit => fruit.color == "yeollow");
console.log(yellowFruits);

// min max
const maxFruit = fruits.reduce( (max, fruit) =>
                                fruit.calories > max.calories ?
                                fruits : max);

const minFruit = fruits.reduce( (min, fruit) =>
                                fruit.calories > min.calories ?
                                fruits : min);

console.log(maxFruit);
console.log(minFruit);

const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();

console.log(year);
console.log(month);