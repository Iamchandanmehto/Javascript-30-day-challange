//Activity 1 -Functionn declaration:
//task 1:

function numberAns(nums) {
    if (nums % 2 === 0) {
       console.log(nums + ` is even number`);
    } else {
       console.log(nums + ` is odd number`);
    }
 }
 numberAns(99)
 numberAns(3434)
 
 //Task 2: write a number to calculate the square of a number and return the result.
 
 function squareNum(result) {
    return result * result
 }
 let answer = squareNum(3)
 
 console.log(answer);
 
 //Activity 2- Function Expression:
 //Task 3:write a function exprerssion to find the maximum of two numbers and log the result to the console.
 
 const myfunc = function (num1, num2) {
    const max = (num1 > num2) ? num1 : num2;
    console.log("the maximum of", num1, "and", num2, "is max");
    return max
 }
 myfunc(3, 2)
 
 
 //task 4: write a function expression to concatenate  two strings and return the result.
 
 const addTwoString = function (str1, str2) {
    const addstr = (str1 + str2)
    console.log(`${str1} + ${str2} => `, str1, str2);
    return addstr
 }
 addTwoString("Naruto", "Uzumaki")
 addTwoString("Chandan", "Mehto")
 
 //Activity 3- Arrow function:
 //task 5 : write an arrow function to calculate the sum of two numbers and return the result.
 
 const addTwoNum = (a, b) => {
    return a + b;
 }
 console.log(addTwoNum(99, 1));
 
 
 //task 6 : write an arrow function to check if a strings containes a specific character and return a boolean value.
 
 const strArrow = (str1, str2) => str1.includes(str2);
 
 
 console.log(strArrow("hello", "f"));
 
 //Activity 4-Function parameters and default values:
 //task 7:write a function that takes two parameters and returns their product. provide a default value for the second parameter.
 const funcOne = function (a, b = 1) {
    return a * b;
 }
 
 console.log(funcOne(5));
 console.log(funcOne(4, 5));
 
 //task 8: write a function that takes a perrson's name and age and returns a greeting message. provide a defualt value for the age.
 
 function personBio(name, age = 18) {
 
    console.log(`Hello ! i know you are  ${name}, and your age is ${age} `);
 }
 personBio("Chandan", 19)
 personBio("Abhinav",)
 
 
 //Activity Higer 5-order functions:
 //task 9: write a higher order function that takes a function and a number, and calls the that many time.
 
 function functionTime(fn, funcNum) {
    return function () {
       for (let i = 0; i < funcNum; i++) {
 
          fn()
       }
    }
 }
 
 const sayHello = () => console.log('Namaste sir');
 const sayHello5Times = functionTime(sayHello, 5);
 
 sayHello5Times()
 
 /*task 10: write a higher - order function that takes two functions and a value, 
 applies the first function to the value, and then applies the second function  to tha result.*/
 
 function highOrder(fn1, fn2, value) {
    return fn2(fn1(value));
 
 }
 
 const plus5 = x => x + 5;
 const addtwo = x=> x+2
 const ans = highOrder(plus5, addtwo, 15)
 console.log(ans);
 
 