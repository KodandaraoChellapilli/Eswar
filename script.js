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

// let age = 18;

// let status = age >=18? "You are an adult" : "You are not an adult";
// console.log(status);

// map()

// map() is a method that creates a new array by applying a transformation function to each element of the original array.

// newArray = originalArray.map(callbackfunction(currentvalue, index, array));

// const numbers = [1,2,3,4,5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);

//callback function
// map
// filter
// reduce
// forEach

// manipulating HTML and CSS --

// const headingE1 = document.querySelector(".heading");
//headingE1.textContent = "Hello  <span class='heading--big'>Everyone</span>"

// headingE1.innerHTML = "Hello <span class='heading--big'>Everyone</span>"

// headingE1.insertAdjacentHTML("beforeend", "<span class='heading--big'>Everyone</span>")

// headingE1.style.fontSize = "58px";

// headingE1.classList.add("heading--big");

// const headingE1 = document.querySelector(".heading");

// const clickHandler = () => {
//   headingE1.style.color = "red";
//   console.log("changed color");
// };



// headingE1.addEventListener("click", clickHandler);



// const body = document.body;


// function setColor(name){
//   body.style.backgroundColor = name
// }

// function randomColor(){
//   const red = Math.round(Math.random() * 255);
//   const green =Math.round( Math.random() * 255)
//   const blue = Math.round(Math.random() * 255)
//   body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }

// const input = document.getElementById("input");


// function reverseString(str){
//   return str.split("").reverse().join("");
// }

// function check(){

//   const value = input.value
//   const reverse = reverseString(value);

//   if (value === reverse){
//     alert("P A L I N D R O ME")
//   } else {
//     alert("N O T P A L I N D R O ME")
//   }


//   input.value = "";
 
  

// }

// function doMath(num, callback){
//   return callback(num);
// }


// const square = x => x * x;
// console.log(doMath(5, square));


// Without destructuring
// const student = {
//   name: "Eswar",
//   age: 27,
//   grade: "A"
// };

// const name1 = student.name;
// const age1 = student.age;
// const grade1 = student.grade;
// console.log(name1);
// console.log(age1);
// console.log(grade1);


// With Destructuring 

// const {name, age, grade} = student;
// console.log(name);
// console.log(age);
// console.log(grade);



// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2021
// };
// const {brand, model, year} = car;
// console.log(brand);
// console.log(model);
// console.log(year);


// const user = {
//   firstName: "Krishna",
//   age: 30

// };

// const {firstName: name} = user;
// console.log(name);

// spread Operator  : its written as ... the elements of an array pr the properties of an object

// const numbers = [1,2,3,4,5];

// const newNumbers = [...numbers, 6, 7, 8, 9, 10];
// console.log(newNumbers);


// const person = {name: "Noah", age: 27};
// const newPerson = {...person,  city:"Florida"};
// console.log(newPerson);


// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Imagine a line of people, where each person is holding the hand of the next person. 
// Thats called a linkedlist. Every person (Called a node) points to the next person


// spread and rest operators(...)

// const fruits = ["apple", "banana"];
// const moreFruits = ["orange", "kiwi", ...fruits];
// console.log(moreFruits);

// Rest Operator ... (For collecting things)


// function showFruits(first, ...restFruits){
//   console.log(first);
//   console.log(restFruits);


// }

// showFruits("apple", "banana", "orange", "kiwi");


// let isHappy = true;

// let message = isHappy? "I am happy" : "I am not happy";
// console.log(message); 


//Optional Chaining ? (.)

// const user = {};

// console.log(user.profile);


// friend.bag.pencil.color
// friend.bag?.pencil?.color

// const friend = {
//   name: "Eswar",
//   bag: {
//     pencil : {
//       color: "blue"
//       }
//   }
// }

// // console.log(friend.bag?.pencil?.color);

// const friend1 = {
//   name: "Mohan"
// }

// console.log(friend1.bag?.pencil?.color);

//.map()

//array.map((element, index, array) => {})

  // const nums = [10,20,30];
  // const result = nums.map(n => n + 1);
  // console.log(result);

  // const nums = [5,10,15];
  // const result = nums.map((n, i)=> n + i);
  // console.log(result);


  // const nums = [1,2,3]
  // const result = nums.map((n, i, arr)=>{
  //   return `${n} is at index ${i} in [${arr}]`;
  // })

  // console.log(result);

  // const students = [
  //   {name: "Eswar", grade: 80},
  //   {name: "Krishna", grade: 90},
  //   {name: "Mohan", grade: 70}
  // ];

  // const updatedGrades = students.map( student => {
  //   return {
  //     name: student.name,
  //     grade: student.grade + 5
  //   }

  // });
  // console.log(updatedGrades);

  // const students = [
  //   {name: "Mohan"},
  //   {name: "Krishna"},
  //   {name: "Eswar"}
  // ];

  // const attendanceMarked  = students.map((student, index)=>{
  //   return {
  //     ...student,
  //     rollNumber: index + 1

  //   }
  // });

  // console.log(attendanceMarked);

  // const menu = [
  //   {name: "Pizza", price: 10},
  //   {name: "Burger", price: 5},
  //   {name: "Pasta", price: 8}
  // ];

  // const withTax = menu.map((food, index, fullMenu) =>{
  //   return {
  //     item: food.name,
  //     originalPrice: food.price,
  //     priceWithTax: (food.price * 1.1).toFixed(2),
  //     menuSize: fullMenu.length
    

  //   }
  // })

  // console.log(withTax);


  // const products = [
  //   {name: "Laptop"},
  //   {name: "Mobile"},
  //   {name: "Tablet"}
  // ]

  // const availableProducts = products.map(product =>{
  //   return {
  //     ...product,
  //     isAvailable: true
  //   }
  // })

  // console.log(availableProducts);


  // const students = [
  //   {name: "Eswar", grade: 75, passed: true},
  //   {name: "Krishna", grade: 45, passed: false},
  //   {name: "Mohan", grade: 82, passed: true},
  //   {name: "Suresh", grade: 95, passed: true},
    
  // ];

  // // const passedStudents = students.filter(student => student.passed);
  // // console.log(passedStudents);

  // const topPassedStudents = students.filter(student =>
  //   student.passed && student.grade > 80

  // )

  // console.log(topPassedStudents);

  // const nums = [1,2,3,4];

  // const sum = nums.reduce((total, current) => total + current, 10);
  // console.log(sum);

  //sort

  // const letters = ['c', 'a', 'd', 'b'];
  // letters.sort();

  // console.log(letters);



  // console.log("Hello");
  // console.log("World");

  // SetInterval(function, time): Start a repeating task
  //clearInterval(): Stop a repeating task
  //setTimeout(function, time): does the task only once after delay


//   console.log("My name is Eswar");

// // setInterval(() => {
// //   console.log("Hello");
// // }, 2000);

// let count = 0;
// const timer = setInterval(()=>{
//   console.log("Hello");
//   count = count + 1;

//   if (count >= 3) {
//     clearInterval(timer); // stop after  3 hellos

//   }



// }, 1000);

// console.log("My name is Krishna");


// console.log("My name is Eswar");

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);


// console.log("My name is Krishna");

// let vinny: string = "hello";

// console.log(vinny);

// callbacks, callback hell, and promises - three super important Javascript concepts
// used to handle asynchronous tasks like loading data from server waiting for a button click, or using timers

// SetTimeout()
// Fetching Data From an API
//Reading a File
// Listening for user events


//What is callback?
// A callback is a function that is passed as an argument to another function and is executed after the completion of the other function

// function greet(name, callback){
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye(){
//   console.log("Goodbye");
// }

// greet("Eswar", sayBye);

// Callback Hell : Nested Callbacks : When you have too many callbacks inside callbacks, it creates a pyramid shaped code thats hard to read and maintain - this is called callback hell.



// setTimeout(()=> {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("World");
//     setTimeout(() => {
//       console.log("!");
//       setTimeout(() => {
//         console.log("Goodbye");
//       }, 1000);
//     }, 1000);
    
//   }, 1000);

// }, 1000);


// What is a Promise?
// A promise is better way to write async code without callbacks.
//It represents a future value: either success or failure.

//Promise states:
//Pending - not finished yet.
//Fulfilled - success - Resolved - finished successfully
//Rejected - failure or failed

// let myPromise = new Promise((resolve, reject)=>{
//   let gameArrived = false;

//   if(gameArrived){
//     resolve("Your Game Arrived");
//   } else {
//     reject("Your Game Not Arrived");

//   }

// })

// myPromise.then((result)=>{
//   console.log("success" , result);
// }).catch((error)=>{
//   console.log("Failure", error);
// })


function task(time, name){

  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(name);
      resolve();

    }, time);

  })

}

task(1000, "Task1")
.then(()=> task(1000, "Task2"))
.then(()=> task(1000, "Task3"))
.then(()=> task(1000, "Task4"))



