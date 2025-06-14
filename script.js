// .. Variable (var/let/ const) & data types/structures(strings/booleans/arrays/objects)
// var name = "hello";
// name = "world";

// let description = "We need a new floor";
// description = "We need a new floor1";

// const squareMeters = 100;

// function testVar(){
//   if(true) {
//     var x = 5;
//   }

//   console.log(x);
// }

// testVar();

// function testconst() {
//   if (true) {
//     const y = 10;
//     y = 20;
//     console.log(y);
//   }
// }

// testconst();

// var squareMeters = 100;
// console.log(isCompleted)
// var isCompleted;

// isCompleted = true;

//-- traditional functions vs arrow functions

// -- string concatenation vs template literals

//if -else vs ternary operator

// -- manupulating HTML and CSS

// events and functions for handling events(also called event handlers)

//Booleans and truthy and falsy values

// "hello" 
//42
// [], {}(empty array/object)
//true


// Falsy values
// "", 0, null, undefined, NaN, false

// const specialCoating = true;
// console.log(specialCoating);

// console.log(Boolean(0));
// console.log(Boolean(42));
// console.log(Boolean([]));
// console.log(Boolean({}));

// There are two main categories of data types:

// Primitive data types:

// String " hello "
// Number : 42
// Boolean : true or false
// Null : null(empty value)
// Undefined : undefined(not assigned any value)
// Symbol: Symbol("id")
//BigInt : 12345678901234567890n;
// Non-primitive data types

// Objects : { name: "John", age: 30 }
// Arrays: [1, 2, 3, "hello"]
// Functions: function() {}
// Dates: new Date()
// Regular expressions: /regex/
// Errors: new Error("Something went wrong")


// Common Array methods:
// Push() Add to the end
// let fruits = ["apple", "banana", "orange"];
// fruits.push("grape");
// console.log(fruits);

// Pop() Remove from the end
// fruits.pop();
// console.log(fruits);

// Shift() Remove from the beginning
// fruits.shift();
// console.log(fruits);

// Unshift() Add to the beginning
// fruits.unshift("kiwi");
// console.log(fruits);

// .length counts Items
// console.log(fruits.length);

// .indexOf() Find the index of an item
// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("kiwi"));

// // .includes() Check if an item is in an array
// console.log(fruits.includes("banana"));
// console.log(fruits.includes("kiwi"));


//.join() - Turn into string
// console.log(fruits.join(", "));

//.slice(strat, end) - copy a piece

// let fruits = ["apple", "banana", "orange", "grape"];

// let part = fruits.slice(1, 3);
// console.log(part);

// console.log(fruits);

// .splice(start, deleteCount, item1, item2, item3) - remove and add items
// Remove items from any position
// insert new items into any position
// let fruits = ["apple", "banana", "orange", "grape"];

// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// fruits.splice(1, 3);
// console.log(fruits);


// let owerName = "Eswar";
// let maxPrice = 10000;
// let category = "Bathroom";
// let newShower = true;


// What is an Object?

// An object is a collection of related data and behavior.
// const renovationJob = {
//   ownerName: "Eswar",
//   maxPrice: 10000,
//   category: "Bathroom",
//   newShower: true,
// };

// console.log(renovationJob.ownerName);
// console.log(renovationJob["ownerName"]);
// console.log(renovationJob.maxPrice);
// console.log(renovationJob.category);
// console.log(renovationJob.newShower);


// const renovationJob = {
//   owner: {
//     name: "Eswar",
//    address: "Some street 55",
//    city: "New York"
//   },

//   maxPrice: 5000,
//   category: "Bathroom",
//   newShower: true,
//   colorOptions: ["Sea Green", "Cyan"],

//   calculate: function() {
//     return this.maxPrice * 1.2;
//   }

// }

// console.log(renovationJob.owner.name);
// console.log(renovationJob.owner.address);
// console.log(renovationJob.owner.city);
// console.log(renovationJob.calculate());

// function greet(){
//   console.log("Hello");
//   console.log("World");
//   console.log("World");
//   console.log("World");
//   console.log("World");

// }

// greet();
// greet();
// greet();
// greet();
// greet();
// function greet(){
//   for (let i = 0; i < 50; i++) {
//     console.log("Hello");
//   }
// }

// greet();

// let name = "Eswar";

// // Function Input(parameters or arguments)

// function greet(name){
//   console.log("Hello " + name);

// }

// greet("Eswar");

// Returning something from the function

// function add(a, b){
//   return a + b;

// }

// let result = add(5, 10);
// console.log(result);

// Function Expression (Alternative Traditional Function Syntax)

// A function expression stroes a function inside a variable

// const sayHello = function(){
//   console.log("Hello");
// }

// sayHello();

// Arrow Functions : A shorter syntex for writing functions introduced in ES6

// const greet = ()=>{
//   console.log("Hello from arrow function");

// }

// greet();


// Arrow Function Shorter Syntax

// If the function has one parameter and one return statement, you can omit parentheses and curly braces. 

// one parameter :

// const greet = name =>"Hello " + name;
// console.log(greet("Eswar"))

// // Two Parameters:

// const add = (a, b) => a + b;
// console.log(add(5, 10))

// How to Name Functions

// USe Verbs to describle action
// Use camelCase for function names
// keep it meaningful and clear

// Sting Concatention

// let name = "Eswar";

// let greeting = "Hello, " + name + "!";
// console.log(greeting);

// Template Literals : Backticks

// let name = "Eswar";
// let age  = 27;
// let love = "JavaScript";

// let data = `My name is ${name} and I am ${age} years old and I love ${love}`;
// console.log(data);
// if else statements

// let age = 20;

// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are not an adult");
// }

// == and ===
// == checks for value equality
// === checks for value and type equality(strict equality)


// console.log(5 == "5");
// console.log(5 === "5");


// Ternary Operator

// A shorcut for if-else.

// condition ? valueIfTrue : valueIfFalse;

let age = 18;

let status = age >=18? "You are an adult" : "You are not an adult";
console.log(status);










