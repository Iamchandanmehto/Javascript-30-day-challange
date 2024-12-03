//Activity 8 - template literals:
//task 1 - use template literals to create a string that includes variables for a person's name  and age, and log the string to the consnole.

let name = "abhinav"
let myAge = 18

console.log(` Hello my name is ${name} and iam ${myAge}yrs old.`);

//task - 2 : create a multi-line string using  template literals  and log it to the console.
const multiLine = `
This is a multi-line string.
You can write text over multiple lines
without needing any special characters.
Each line is preserved as you write it.
`

console.log(multiLine);

//Activity - 2 destructuring:
//task - 3: use array  destructuring to extract the first and second element from an array of numbers and log and log them  to the console.

const myObj = [10, 20, 30, 40, 50, 60]

const [first, second ] =  myObj
console.log(first);
console.log(second);

// task - 4: use object  destructuring to extract title and  author from a book object  and log them to the console.
const book = {
    title:"I'm Dysfunctional, You're Dysfunctional",
    author:"Wendy Kaminer"
}

const {title, author} = book
console.log(title);
console.log(author);

// spread and rest operators
//  task 5: use  the spread operator to create a new array that includes all elements
//  of an existing array plus additional elements , and log the new array to the console.

let firstArr = ["Orange", "Beige", "NavyBlue", "White"]
let secondArr = [10, 20, 30, 40]
let thirdArr = ["Porsche", "Bentley", "Tata", "Jaguar"]

console.log(...firstArr,...secondArr, ...thirdArr);


// task -6 : user rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumAll(...numbers) {
    return numbers.reduce((acc, curr)=> acc + curr , 0)
    
}

console.log(sumAll(4, 5, 6, 7, 8, ));

//activity - 4: default parameters 
// task - 7 :  write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. 
//log the result of calling this function with and without the second parameter.

function product(par1, par2) {
    par1 = "first par."
    console.log(par1);
    return par2 = 1
    console.log(par2);

    
}
product()

// but we can also write in this way : 
function multiply(a, b = 1) {
    return a * b;
  }
  
  // Example usage:
  console.log(multiply(5, 3)); // Output: 15
  console.log(multiply(7));    // Output: 7

  
  //Activity 5 - enhanced Object literals : 

// task  -  8 : use enhanced object literals to create an object with methods  and properties , and log the object to the console.

const myname = 'John';
const age = 30;

const person = {
  myname,
  age,
  greet() {
    console.log(`Hello, my name is ${this.myname} and I am ${this.age} years old.`);
  },
  incrementAge() {
    this.age++;
  }
};

console.log(person);

person.greet(); 
person.incrementAge();
person.greet(); 

// create an object with computed property name based in variable  and log the object to the console.
 

 const myComProp = 'c'
const myCom = {
    a : 1,
    b:2,
[myComProp]: 3
}
console.log(myCom.c);