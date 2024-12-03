// // Activity 1: Understanding Promises
// //Task-1 Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello !")
//     }, 2000);
// }).then((message) => {
//     console.log(message);

// })

// // Task-2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Error")
//     }, 2000);
// }).catch((message) => {
//     console.log(message);

// })

// // Activity 2: Chaining Promises

// // Task-3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.


// function fetchingData(messages, Delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(messages)
//         }, Delay);
//     })
// }

// fetchingData("Fetching user data...", 1000)
//     .then((message) => {
//         console.log(message);
//         return fetchingData("Fetching posts data...", 2000);
//     })
//     .then((message) => {
//         console.log(message);
//         return fetchingData("Fetching comment data", 1500)

//     })
//     .then((message) => {
//         console.log(message);
//         return fetchingData("All data fetched!", 1000)
//     })
//     .catch((error) => {
//         console.log("an errore acured", error);

//     })
// //Activity - 3: Using Async/Await
// //Task-4 :  Write an async function that waits for a promise to resolve and then logs the resolved value.

// async function prob() {
//     let promiseOne = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Hey Iam Resolved.")
//         }, 2000);
//     })

//     let res = await promiseOne
//     console.log(res);

// }
// prob()

// //Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.


// async function handleRejectedPromise() {
//     try {
//         // Simulating a rejected promise
//         let result = await Promise.reject(new Error("Something went wrong!"));
//         console.log(result); // This line will not be executed due to the rejection
//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// handleRejectedPromise();

// // Activity 4: Fetching Data from an API
// // Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// // URL of the public API endpoint
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// // Using the Fetch API to make a GET request
// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data fetched from API:', data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

//   Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.



// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.


const promiseSeven = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("hey Iam waiting..")
    }, 1000)

})

const promiseEight = new Promise(function(resolve , reject){
    setTimeout(()=>{
resolve("you need to work hard!")
    },2000)
})
const promiseNine = new Promise(function(resolve , reject){
    setTimeout(()=>{
resolve("i got an apple")
    },3000)
})

Promise.all([promiseSeven, promiseEight, promiseNine]).then((x)=>{
    console.log(x)
})
.catch((error)=>{
console.log(error)
})



//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promiseTen = new Promise(function (resolve, reject){
    setTimeout(()=>{
resolve("Welcome.")
    },1000)
})
const promiseMore = new Promise(function (resolve, reject){
    setTimeout(()=>{
resolve("Welcome.")
    },2000)
})
const promiseAnother = new Promise(function (resolve, reject){
    setTimeout(()=>{
resolve("Welcome.")
    },4000)
})


Promise.race([promiseTen, promiseMore, promiseAnother]).then((user)=>{
    console.log(user)
})
.catch((error)=>{
    console.log(error)
})

