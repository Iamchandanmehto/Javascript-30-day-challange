//Activity 1- Array creation and access:
//task 1: create an array from 1 to 5 and log the array to the console.

const myArray = [1, 2, 3, 4, 5 ]
// console.log(myArray);


//task 2: access the first and last elements of the array and log them to the console.
// console.log(myArray[0], myArray[4]);

//Activity 2- Array methods (basic)
//task 3- use the push method to add a new number to the end of the array and log the updated array.
myArray.push(6)


//task - 4: use the pop method to remove the last element from the array and log the updated array.
myArray.pop(6)


//task- 5: use the shift method to rermove the first element from the array and log the updated array.
myArray.shift()


//task-6: use the unshift method to add a new number to the beginning of the array and log the updated array.
myArray.unshift(1)
console.log(myArray);


//Activity 3- Array methods (Intermediate):

//task - 7: use the map method to create new array where each number is doubled and log the new array.

const newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const doubleArray = newArray.map((num) => num*2)
console.log(doubleArray);


//task 8:use the filter method to create a new  array with only even numbers and log the new array.

const numberOfArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const filtArr = numberOfArr.filter((num) => {
     if (num % 2  === 0) {
         console.log( ` even Num : ${num}`)
    
    }  
})


//task 9: use the reduce method to to iterate over the array and log  each element to  the console.

const data = [2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumof = data.reduce((acc, currVal) => acc + currVal, 0)

console.log(sumof);


//Activity - 4: Array iteration.
//task 10 - use a for loop to iterate over the array and log each element to the console.




    const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    for (let index = 0; index < myarray.length; index++) {
      console.log(myarray[index]);   
    }


//task 11 - use the forEach method to iterate over the array and log each element to the console.

const gotArray = [10, 20, 30, 40, 50, 60, 70, 80, 90]

gotArray.forEach((gotArray) => {
  console.log(gotArray);
});

//Activity-5: multi-dimensional arrays
//task 12 -create a two dimensional array (matrix) and log the entire array to the console.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

matrix.forEach(matrix => {
  console.log(matrix);
  
});

//task  13- access  and log a specific element from two-dimensional array

 console.log(`our first specific element is ${matrix[1]} from array`);

 

