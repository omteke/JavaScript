// const { Activity } = require("react")

const balance = new Number(2000)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))
// when you build e-commerce website and precision value is so long then use to fixed
console.log(balance.toLocaleString())  
// Converts a number to a string by using the current or specified locale
console.log(balance.toLocaleString("en-IN"))
console.log(balance.toPrecision(2))
console.log(balance.valueOf())

// Math Operations
console.log(Math)
console.log(Math.abs(-4))
// when we pass positive value it convert to negativea and viseversa
console.log(Math.floor(2.2))
// lowest value
console.log(Math.ceil(2.2))
console.log(Math.round(2.2))
console.log(Math.min(1,2,34,5))
console.log(Math.max(1,2,34,5))

// Activity Math.random
console.log(Math.random(1))




