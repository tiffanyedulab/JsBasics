// Multiply with function.

num1 = 2;
num2 = 4;

function multiply(c,d) {
  return c*d;
}
console.log(multiply(num1,num2))

// Find out even/odd number with if and else command.

a = 4;

if (a == 4) {
  alert("This an even number");
}
else {
  alert("This is an odd number");
}

// Additon with function.

num1 = 5
num2 = 5

function add(a,b) {
console.log(a,b)
 return a+b;
}
console.log(add(num1,num2))

// Generic if and else statements.

let iceCream = 'Chocolate'

if (iceCream !== 'Chocolate') {
  alert("I like Chocolate Icrecream");
}
else{
  alert("No comments");
}

// Subtract with function.

a = 4;
b = 7;

function subtract(c, d){
console.log(c,d);
  return d-c;
}

console.log(subtract(a,b))

// Arrays

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

// Indexing

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[3] = "Hair"
console.log(shopping);

// Types of Arrays 1

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping.pop();
console.log(shopping);

// Types of Arrays 2

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping.join(", ")
console.log(shopping);

// Adding items in an array.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping.push('Butter');
console.log(shopping)

// Find the index of an Array.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping.indexOf('bread'));

// Finding the length + adding an item to the list.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
newLength = shopping.push('Butter');
console.log(shopping);

// To place an item in the beginning.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping.unshift('Tea');
console.log(shopping);

// To remove the first item from the list.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping.shift();
console.log(shopping);

// Identify the index and remove the item.
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping.splice(3);
console.log(shopping);

// Accessing every item in an Array.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
for(const shoppings of shopping);
console.log(shopping);

// Double the numbers

const numbers = [2,5,7,9];

function double(number){
  return number * 2;
}
const doubled = numbers.map(double);
console.log(doubled);

 // Join the Array.

const shopping = ['bread','milk','cheese','hummus','noodles'];
shopping.join(', ');

// To-string attiribute.

const shopping = ['bread','milk','cheese','hummus','noodles'];
shopping.toString();

//Practice.

const numbers = [1,2,3,4,5];

function double(number){
  return number * 2;
}
const doubled = numbers.map(double);
console.log(doubled);

// The isLong Function.

const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];

function isLong (city){
  return city.length > 6;
}
const longer = cities.filter(isLong);
console.log(longer);

 // Practice.

 const words = ['Tiffany', 'Juana', 'Thelma', 'John'];

 function isLong (word){
   return word.length > 6
 }
 const longer = words.filter(isLong);
 console.log(longer);

// Practice.

const myInt = 4;
const myFloat = 0.56;

type(myInt);
type(myFloat);

// ++ operators.

let num1 = 4;
num1++;
num1;

// -- operators.

let num1 = 6;
num1--;
num1;

// HTML Table.

<table>
 <caption>
   Dinosaurs in the Jurassic period
 </caption>

 …
</table>

// Asynchronous.

console.log("Hi!")

setTimeout(function(){
  console.log("Asynchornous result");
}, 5000);

console.log("Synchronous result.");

// Type of:

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

typeof myInt;
typeof myFloat;

// const a = [1,2,3,4,5];
//
// function double(a){
//   return a * 2;
// }
// const doubled = a.map(double);
// console.log(doubled);
//
// const b = 6
// const a = 2
//
// function multiply(c,d){
//   return b*a;
// }
// console.log(multiply(b,a));

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
