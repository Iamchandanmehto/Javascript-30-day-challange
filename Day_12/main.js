//Tasks/Activities:
//Activity 1: Basic Error Handling with Try-Catch

//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function newTry() {
    const myarr = ["Goa", "Delhi", "Manali", "Shimla"]

    try {
        console.log(my)
    } catch (error) {
        console.log("sir we couldnt find city")

        console.log("error details", error)
    }
}

// newTry()


// task-02:  create a function that divides two numbers and throws and error if the denominator is zero. use a try-catch block to handle this error.


function divideNumber(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed ");

    }

    return numerator / denominator;
}

function safeDivide(numerator, denominator) {
    try {
        const result = divideNumber(numerator, denominator)
        console.log("result", result)
    } catch (error) {
        console.log("Error:", error.message)
    }
}



// safeDivide(10,2)
// safeDivide(0,10)

// task -03 : write a script that includes a try-catch block and a finally block .Log messages in the try , catch and finally block to observe flow.


function solution() {
    try {
        console.log("Hey Iam first code!!")
        throw new Error("Iam Error code");

    } catch (error) {
        console.log("Hey iam the real Error code", error)
    } finally {
        console.log("No Iam finally a real !!")
    }
}

// solution()



// Activity -03 : custom error objects

// task -04 : Create a custom error class that extends the built-in error class. throw an instance  of this custom error in a function and handle it using a try-catch block.




class English extends Error{
    constructor(message) {
        super(message)
        this.name= "custom error"
    
    }
}

function riskyFunction(){
    throw new customError("Someting went wrong in risky function");
    
}

try {
    riskyFunction()
} catch (error) {
    if (error instanceof English) {
        console.log("cought a custom error", error.message)
    } else {
        console.log("unexpcted error cought", error)
    }
}



// task-05: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom errro using a try-catch block.

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "validationError";
    }
}

function errorFunction(input) {
    if (!input || input.trim() === "") {
        throw new Error("Input cannot be empty.");
        
    } 
    return true;
}

try {
    const userInput = " ";
    errorFunction(userInput)
} catch (error) {
    if (error instanceof errorFunction) {
        console.error("validation erro", error.message)
    } else {
        console.error("An unexpected error  occured:", error.message)
    }
}

// activity-04: error handling in promise.

// task-06: create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log and appropriate message to the console.



function ranPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue >0.5) {
                resolve("Success! The value was greater than 0.5.")
            } else {
                reject("Failure! The value was 0.5 or less.")
            }
        }, 1000);
    })
}
ranPromise()
.then((message)=>{
"resolved", message
})
.catch((error)=>{
console.log("rejected",error) 
})


//task-07: use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and  log the error message.

function timeFun(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomScore =(Math.random()+1) ;
            if (randomScore > 1.5) {
                resolve("Success! The value was greater than 5.")
            } else {
                reject("Failed the value is more then 5.")
            }
        }, 1000);
    })
}

async function asynFun() {
try {
const resultFun = await timeFun();
        console.log("succeed", resultFun)
} catch (error) {
    console.log("failed", error)
}
}

// asynFun()


// Acitvity 5: Graceffull Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL handle the error using .catch(). log an appropriate error message to the console. 


fetch('https://invalid-url.com') 
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }) 
.then(data => { 
    console.log("You fetched data successfully:", data)})
.catch(error => {
    console.error("You got an error because the link is not valid:", error.message)});


    //Task-09: use the fetch API to request data from and invalid URL within an async function and handle the error using try-catch. log and appropriate error message.

   



    // async function dataFun() {
         

        try {
            const dataCheck = await  fetch('https://invalid-url.com')
        .then(responce=>{
    if(!responce.ok){
    throw new Error("Network has some issue.");
    }
        }).then(data=>{
    console.log("You fetched data successfully", data)
        })
        console.log(dataCheck)
        } catch (error) {
            console.log("Sir URL is invalid and major issue." , error)
        }
    

    // dataFun()

    async function dataFun() {
        try {
          const response = await fetch('https://invalid-url.com');
          
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          
          const data = await response.json();
          console.log("You fetched data successfully:", data);
          
        } catch (error) {
          console.error("The URL is invalid or there was a major issue:", error.message);
        }
      }
      
    //   dataFun();