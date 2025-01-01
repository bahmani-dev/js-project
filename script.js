// console.log("Hello World");

// // Variable
// // Old JavaScript
// var fullName = "jamil";

// // New JavaScript
// const lastName = "fahimi";
// console.log("lastName", lastName);

// let age = 20;
// console.log(age);
// age = 21;
// console.log(age);

// Data Type
// 1. Primitive
// 1. String
// 2. number
// 3. boolean   true , false
// 4. null
// 5. undefined
// 6. symbol
// 7. bigInt
// 2. non primitive
//  1. Object
//  2. Array
//  3. Map
//  4. Set

// const address = "Kart3, pole-sorkh";
// console.log(address, typeof address);

// let phoneNumber = 123;
// console.log(phoneNumber, typeof phoneNumber);

// const hasLicense = false;
// console.log(hasLicense, typeof hasLicense);

// console.log(null, typeof null);

// let school;

// console.log(school);

// const x = 2 + 3 * 5 - 4 / 2 + (23 + ((3 ** 4 / 2) % 3));
// const y = 5;

// console.log(x);

// Expression  -> Value -> Variable
// const x = 12;
// console.log(x);
// // Statement  -> X Value
// console.log("hi i am a developer");

// Falsy Values
// false   0  ''  null   undefined
// if else Statement

// const degree = false;
// const experience = true;
// console.log("" || 0 || "degree");

// if (degree && experience) {
//   console.log("You are selected 😊 ");
// } else if (experience || degree) {
//   console.log("You dont have enough education");
// } else {
//   console.log("You are failed");
// }

// const colors = [
//   "red",
//   "blue",
//   "green",
//   "yellow",
//   "green",
//   "gray",
//   "white",
//   "black",
//   "brown",
// ];
// console.log(colors);
// // for (let i = 0; i < colors.length ; i++) {
// //   console.log(`I like ${colors[i]}`);
// // }

// // for of loop
// for (let color of colors) {
//   console.log(`I want to use ${color}`);
// }

// // for in loop
// for (let index in colors) {
//   console.log(index);
// }

// const userArray = ["mahmood", 23, true, "manager", ""];
// // console.log(userArray[1]);
// // Object (key, value)

// const user = {
//   firstName: "mahmood",
//   age: 23,
//   canDelete: true,
//   role: "manager",
//   salary: undefined,
//   false: "yes",
//   20: 30,
// };
// console.log(user.firstName);
// const name = "first";
// console.log(user[name + "Name"]);

// // Function
// // Create
// function printer(name, greeting) {
//   return `hi ${name}! ${greeting}`;
// }

// // Call (Invoke)
// console.log(printer("developers", "how are you?"));
// printer("engineers", "how do you do?");

// function helloWriter() {
//   return "Hi everyone, I am happy today";
// }

// const hello = helloWriter();
// console.log(hello);

// function calculateBMI(weight, height) {
//   const bmi = weight / height ** 2;
//   return bmi;
// }

// const weight = prompt("Enter your weight");
// const height = prompt("Enter you height");

// const bmi = calculateBMI(weight, height);
// console.log(bmi);

// This is a best way learning functions

// function print() {
//   // console.log(text);
//   return ` learning functions`;
// }

// const printFirst = (number) => {
//   return `${number}. This is a best way`;
// };

// const sentence = printFirst(1) + print();

// console.log(sentence);
// console.log(print());

// const kankor = true;
// // Ternery operator
// let isEligible = kankor ? true : false;
// console.log(isEligible);

// const hasPaid = false;
// const deliver = hasPaid
//   ? "You can deliver"
//   : "You should not deliver becaseu customer hasnt paid yet";

// const bmi = 24;
// const bmiMessage = 18 <= bmi && bmi <= 25 ? "Normal" : "Not normal";
// console.log(bmi, bmiMessage);
// if (kankor) {
//   isEligible = true;
// } else {
//   isEligible = false;
// }


// DOM -> Document Object Model
