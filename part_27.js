// Methods in Object

let person = {
  firstName: "Nikhil",
  lastName: "Gautam",
  sayHello() {
    console.log("Hello!");
  },
};
person.age = 25;
person.sayHello();

// there are 4 methods in javascript
// <------------------------------------------------->
//? 1st way to create a method in object
// **Using Anonymous function**

person.sayHello = function () {
  console.log("Hello !");
};

person.sayHello();

//<------------------------------------------------->
//? 2nd way to create a method in object

//** Using a Normal Function and then assign  */

function greet() {
  console.log("2nd way !");
}
person.sayHello = greet;
person.sayHello();

//<------------------------------------------------->

//? 3rd way to create a method in object

//** Defining the method inside the object  */

let person = {
  firstName: "Nikhil",
  lastName: "Gautam",
  sayHello: function () {
    console.log("I'm 3rd way inside an object");
  },
};
person.sayHello();

//? 4th way to create a method in object (ES6+)
//** Direct (without using function keyword)  */

let student = {
  firstName: "Nikhil",
  lastName: "Gautam",
  sayHello() {
    console.log("I'm latest ES6+");
  },
};
student.sayHello();
console.log(student.firstName);
