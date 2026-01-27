// we can declare object using two types object literal and object singleton
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
let user = {
    name:"om",
    age : 20,
    email:"omteke2005@gmail.com",
    city:"sangli",
    islogin : true,
    lastloginadate : ['mon','tue','wed'],
    "Full name" : "om teke" //old method
}
console.log(user)
console.log(user.email)
console.log(user.lastloginadate)
console.log(user["Full name"])

user.email = "om@2005"
console.log(user.email)

// Object.freeze(user) //cannot  change value of email
user.email = "tekeom@2005"
user.greeting = function(){
    console.log("hello")
}
console.log(user.email)
console.log(user.greeting())

// Symbol example
const mysymbol=Symbol("WT")
const myobj1={
    [mysymbol]:"Hello",

}
console.log(myobj1);
console.log(typeof(myobj1));

// object literal
user.greeting = function(){
    console.log(`email : ${this.email}`)
}
console.log(user.greeting())




