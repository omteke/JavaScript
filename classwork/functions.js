// function def : Reuseable block of code that perform some specific task

// 1) Function Declaration + Definition
// Declaration = only “function signature” (name + parameters)
// Definition = body/implementation
function add(a, b) {
  return a + b;   // function body (definition)
}

// 2) Function Call
let result = add(10, 20);

console.log(result); // 30


function multiply(a, b) {
  return a * b;
}

let result1 = multiply(4, 5);

console.log(result1)


function userlogin(name){
  return `login : ${name}`//when value cannot passed is undefines it gives udefined 
}

console.log(userlogin())


function math(...num){
  return num;
}
console.log(math(1,2,3))

// const add = (a, b) => {
//   return a + b;
// };
//add(1,2)
// this keyword story

function fun1(){
  username = "om";
  console.log(this) //we cannot use only this function in simple function
}
fun1()

const arrorfun = () => {
  username1 = "om dhananjay teke"
  console.log(this)  //In arrow function if we write only this then it return empty object
}
arrorfun()