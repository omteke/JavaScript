// singleton object
const user = new Object();
console.log(user)

const user2 = {}  //non singleton object
user2.id = 123
user2.name = "om"
user2.city = "sangli"
user2.login = true

console.log(user2)

// nested object
const usre3 = {
    email:"omteke@2004",
    name :{
        fname:"om",
        lastname:"teke"
    }
}
console.log(usre3)
console.log(usre3.name.fname)