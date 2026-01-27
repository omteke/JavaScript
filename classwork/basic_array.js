let myarr= [0,1,2,3,4]
console.log(myarr)

const myarr1 = new Array(0,1,2,3) // why this
console.log(myarr1[1])

// array methods

myarr1.push(5)
console.log(myarr1)

myarr1.pop(5)  //remove last value from array
console.log(myarr1)

myarr1.unshift(6)
console.log(myarr1)  //it shift all element and add element at first


myarr1.shift(6)
console.log(myarr1)  

myarr1.includes(5)
console.log(myarr1)

console.log(myarr1.indexOf(2)) //Returns the index of the first occurrence of a value in an array, or -1 if it is not present


console.log(typeof(myarr1))

const newarr = myarr1.join()
console.log(newarr)
console.log(typeof(newarr))


