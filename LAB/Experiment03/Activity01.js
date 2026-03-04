// diffreence bet arrow fun and simple fun(this keywords)
// write code for arrow fun with two examples
// switch case
// how to use truthy ansd false value 
// how to use ternary operators in js
//how to use loops in array
// difference for of and for in
// how to use map and filter function in js
//how to use reduce funtion in js


// switch case

// let chioce = 1;

// switch(chioce){
//   case 0:
//     day = "Sunday";
//     console.log("Day is:",day)
//     break;
//   case 1:
//     day = "Monday";
//     console.log("Day is:",day)
//     break;
//   case 2:
//      day = "Tuesday";
//      console.log("Day is:",day)
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log("Day is:",day)
//     break;
//   case 4:
//     day = "Thursday";
//     console.log("Day is:",day)
//     break;
//   case 5:
//     day = "Friday";
//     console.log("Day is:",day)
//     break;
//   case 6:
//     day = "Saturday";
//     console.log("Day is:",day)

// }

const dayOfWeek = new Date().getDay(); // getDay() returns a number from 0 (Sunday) to 6 (Saturday)
let message;

switch (dayOfWeek) {
    case 0:
        message = "Today is Sunday";
        break;
    case 1:
        message = "Today is Monday";
        break;
    case 2:
        message = "Today is Tuesday";
        break;
    case 3:
        message = "Today is Wednesday";
        break;
    case 4:
        message = "Today is Thursday";
        break;
    case 5:
        message = "Today is Friday";
        break;
    case 6:
        message = "Today is Saturday";
        break;
    default:
        message = "Unknown day";
}

console.log(message); // Example output: "Today is Wednesday" (depending on the current day)


