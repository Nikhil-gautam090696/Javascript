//Properties in Object

let person = {
  firstName: "Nikhil",
  lastName: "Gautam",
};

//Add new property
person.age = 25;

// Modify an Object
person.firstName = "Himanshu";

// delete property
delete person.lastName;

console.log(person);

// How to know wheather a property exist or not
//We use **//*(in) operator

console.log("height" in person);

//iterating property of an object we will use for in loop

for (let key in person) {
  console.log(key + ":" + person[key]);
}

//? for in loop is used to iterate over an object
