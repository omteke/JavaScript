//Array,function,object declaration
let numbers = [1,2,3,4,5]
console.log(numbers)
console.log("-----------------------------------------")
function add(a,b){
    sum = a+b
    return sum;
}

sum_of_two_numbers = add(5,5);
console.log(sum_of_two_numbers) 
console.log("-----------------------------------------")

let student = {
    name : "shivtej",
    age : 20,
    course : "javascript"
}
console.log(student)
console.log(student.age)
console.log("-----------------------------------------")

//write a code for reversse number

let num = 123;
let reverse = 0;

while(num>0){
    let lastdigit = num%10;
    reverse = reverse * 10 + lastdigit;
    num = Math.floor(num / 10);
}
console.log(reverse)
console.log("-----------------------------------------")

let originalnum = 121;        
let temp = originalnum;        
let reversenum = 0;            

while (temp > 0) {
    reversenum = reversenum * 10 + (temp % 10); // add last digit
    temp = Math.floor(temp / 10);               // remove last digit
}

// compare original and reversed number
if (originalnum === reversenum) {
    console.log("Number is palindrome");
} else {
    console.log("Number is not palindrome");
}
console.log("-----------------------------------------")
//write code for fibonacci series

let a=0,b=1;
let n=3;
console.log(a)
console.log(b)
for(i=0;i<n;i++){
    let c = a+b;
    console.log(c)
    a = b;
    b = c;
}

console.log("-----------------------------------------")
//find largest element in an array
let arr = [10, 45, 23, 99, 5];

let largest = arr[0]; // assume first is largest

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("Largest element:", largest);
console.log("-----------------------------------------")

 //remove duplicate from array
 let arr1 = [1,2,2,3,4,5];
 let uniquearr = []

  for (let i = 0; i < arr1.length; i++) {
    if (!uniquearr.includes(arr1[i])) {
      uniquearr.push(arr1[i]);
    }

  }
  console.log("unique array is:",uniquearr)

  console.log("-----------------------------------------")

//   string reverse
let str = "shivtej";
let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log("reveres string is:",reversed);

  console.log("-----------------------------------------")

  //count vowels in a string
let count = 0
let str1 = "shivtej"
let vowels = "aeiouAEIOU"
for(let char of str1){
if(vowels.includes(char)){
    count++
}
}
console.log("count of vowels in string:",count)

console.log("-----------------------------------------")

//check string is palindrome or not

let str2 = "shivtej"
let reversed1
reversed1 = str2.split("").reverse().join("");

if(str === reversed1){
    console.log("string is pallindrom")
}
else{
    console.log("string is not pallindrom")
}

console.log("-----------------------------------------")

// prime number
let num1 = 6;
let isPrime = true;   


if (num1 <= 1) {
  isPrime = false;
}


for (let i = 2; i < num1; i++) {
  if (num1 % i === 0) {
    isPrime = false;  
    break;            
  }
}


if (isPrime) {
  console.log("Number is prime");
} else {
  console.log("Number is not prime");
}

console.log("-----------------------------------------")
// Find factorial of a number
function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}
fact = factorial(5)
console.log("factorial of given number is",fact);

console.log("-----------------------------------------")

// Write a function to check number is even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(7));

console.log("-----------------------------------------")
// Write a function to calculate sum of array elements
function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
sum = sumOfArray([10, 20, 30])
console.log("sum of array is:",sum);












