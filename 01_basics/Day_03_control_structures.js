//Activity 1: if-else statements


//task 1:
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {

        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is Zero`);
    }
}

checkNumber(-9)

//task 2:

function voter(age) {
    if (age >= 18) {
        console.log(`You can vote`);
    }
    else {
        console.log(`You cannot vote.`);
    }
}
console.log(voter(19));


//Activity-2 Nested if-else statements

// taske 3:

function largestNum(a, b, c) {
    let largest;
    if (largest >= a) {
        largest = a;
    } else {
        largest = c;

    }

    {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
        return largest; .16
    }
}


console.log(largestNum(12, 66, 9));

//Activity 3 : switch case

//task 4:


function Day(week) {
    switch (week) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;

        default:
            break;
    }
}

Day(3)

//Task 5:


function studentMark(grade) {

    switch (grade) {
        case 10:
            console.log("A");
            break;
        case 20:
            console.log("B");
            break;
        case 30:
            console.log("C");
            break;
        case 40:
            console.log("D");
            break;
        case 50:
            console.log("F");
            break;

        default:
            console.log("You got error");
            break;
    }

}

studentMark(50)
studentMark(30)
studentMark(10)

//Activity 4:
//task 6:

function numbers(num) {
    const result = (num % 2 === 0) ? "The number is even " : "The number is odd"
    console.log(result);
}

numbers(1)
numbers(8)

// Activity 5 : Combining conditions
// task 7:

function leapYear(year) {
    let result;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                result = `${year} is a leap year`
            } else {
                result = `${year} is a  not leap year`
            }
        } else {
            result = `${year} is  a leap year`
        }
    } else {
        result = `${year} is not a leap year`
    }
    console.log(result);
}

leapYear(2000)
leapYear(2024)
leapYear(2004)
leapYear(3000)

