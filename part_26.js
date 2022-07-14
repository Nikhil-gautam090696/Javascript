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

// How to know wheather a property assign or not
//We use (in) operator

console.log("height" in person);

//iterating property of an object

for (let key in person) {
  console.log(key + ":" + person[key]);
}
