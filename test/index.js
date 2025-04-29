// let str = "ajsdhweuin"

// let result = str.split('').sort()

// console.log(result)

// function generateGreeting(hour) {

//     return `Good ${hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening'}`;
  
//   }

// console.log( generateGreeting(19)  )

// 

// let obj = {name: "ALi", age:20, city:"karachi"}

// function logDetails({ name, age, city }) {

//     console.log(name, age, city);
  
//   }
  
  

//   logDetails(obj)

// function sayHello() {

//     setTimeout(function() {
  
//       console.log("Hello");
  
//     }, 2000);
  
//   }

// function sayHello() {

//     setTimeout(console.log("Hello"), 2000);
  
//   }

// sayHello()  



// function formatProductDetails(obj) {

//     return `The product is ${obj.product}, priced at ${obj.price} with a quantity of ${obj.quantity}.`;
  
//   }

// function formatProductDetails(obj) {

//     return `Product: ${product}, Price: ${price}, Quantity: ${quantity}`;
  
//   }

// const result = formatProductDetails({product:"xyz", price:200, quantity:20})  
// console.log(result)

// function makeCounter() {

//     let count = 0;
  
  
//     return function() {
  
//       count++;
  
//       return count;
  
//     };
  
//   }
  
  
//   const counter = makeCounter();
  
//   console.log(counter()); 
  
//   console.log(counter()); 
  
//   console.log(counter());


// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// // let combined = [...arr1, ...arr2];
// let combined = arr1 + arr2;

// console.log(combined)

// function outerFunction() {

//     var outerVar = 'Hello';
  
    
  
//     function innerFunction() {
  
//       console.log(outerVar);  
  
//     }
  
    
  
//     innerFunction();
  
//   }
  
//   outerFunction();

// function outerFunction() {

//     let outerVar = 'Hello';
  
    
  
//     function innerFunction() {
  
//       console.log(outerVar);  
  
//     }
  
    
  
//     innerFunction();
  
//   }
  
//   outerFunction();

// function Animal(name) {

//     this.name = name;
  
//   }
  
//   Animal.prototype.sayHello = function() {
  
//     return `Hello, my name is ${this.name}`;
  
//   };
  
  
//   const dog = new Animal('Rex');
  
//   console.log(dog.sayHello());

// let str = "ila"

// const result= str.split("").reverse().join("")

// console.log(result)

// function testScope() {

//     let x = 10;  
  
//     if (true) {
  
//       let x = 20;  
  
//     }
  
//     console.log(x);  
  
//   }
  
//   testScope();

// let x;

// console.log(typeof x);

// console.log(varVariable); 

// console.log(letVariable);
// console.log(constVariable);

// var varVariable = 'var';

// let letVariable = 'let';

// const constVariable = 'const';

const person = { firstName: 'John', lastName: 'Doe', age: 25 };
const { firstName, lastName } = person;
console.log(firstName, lastName)