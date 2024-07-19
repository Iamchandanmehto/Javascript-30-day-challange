// Activity 1 : For loop

// Task 1:

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}

//Task 2:

function multiplication(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} X ${i} = ${ number * i}`);
        
    }
}

multiplication(5)


// Activity - 2: While loop
// Task 3:
 

function sumOfNum() {
    let sum = 0 
    let number = 1
    while ( number<= 10) {
        sum += number;
        number++;

    }
    console.log(`The sum of numbers is 1 to 10 is ${sum}`);
}

sumOfNum()

//Task 4:
let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}


// Activity 3 : Do... while loop

//Task 5:

let Num = 1
do {
    console.log(`number is: ${Num}`);
    Num++
} while ( Num <= 5);

//Task 6:

function factorialNumber(nums) {
    let fact = 1
    let i = 1

    do {
        fact *= i;
        i++

        
    } while ( i <= nums);
    return fact++
}
const nums = 5;
const result = factorialNumber(nums);
console.log(`The factorial of ${nums} is: ${result}`);

// Activity-4 : Nested loops
//Task 7:

// Example pattern:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


function PrintPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
             row += '*   ';
            
        }
        console.log(row);
    }
    
}

PrintPattern(5)

//Activity 5: Loop Control Statements
//Task-8:
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Detected : 5`);
        continue
    }
    console.log(i);
    
}

//Task -9:

for (let c = 0; c <= 10; c++) {
    if (c == 7) {
        console.log(`Detected : 7`);
        break
    }
    console.log(c);
}
