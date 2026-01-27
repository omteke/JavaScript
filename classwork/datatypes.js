// symbol = for unique id
let a = Symbol("12");
console.log(a);

let b = Symbol("34");
console.log(b);

let id = 123;
console.log(id===a);
// javaScript is dyanamic language.

// Array
const subjects = ["JavaScript", "HTML", "CSS"];
console.log(subjects);

// Object
const myObj ={
    fname: "OM",
    age:20
};
console.log(myObj);
console.log(myObj.age); // use myObj.age to just print age 

// Function
// Activity how to use function declaration, defination,all 
function call()
{
    console.log("Om");
    
}
console.log(call());

let demoFun = function call()
           {
                console.log("Om");
    
           }
console.log(demoFun);

// memory 
// stack premitive use what ever you can declare variable it keep Copy
// heap it gives reference original value
// stack
let my_youtube_name = "om"
let new_youtube_name = my_youtube_name
new_youtube_name = "themastercoder"

console.log(my_youtube_name)
console.log(new_youtube_name)


// nonprimitive 
let user1 = {
    email:"omteke@2005gmail.com",
    fname:"om",
    id:20
} 

let user2 = user1
user2.email="omteke25gmail.com"
console.log(user1.email)
console.log(user2.email)

// primitive datatypes stores in stack
// a copy is made chages is doesnot affect

// heap:when is assign one oject to another variable reference is copy not value if we change one
// variable another alsochanges

