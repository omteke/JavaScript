let superheroes = ["ironman","spyderman","superman"]
let cars = ["bmw","mercedes","oudi"]
// superheroes.push(cars)
// console.log(superheroes)

// console.log(superheroes[0])

// console.log(superheroes[3][2])

// console.log(superheroes[3][2][0])


console.log(superheroes.concat(superheroes)) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const arr1 = [0,1,[1,2,3,4,5],[6,7,[4,5]]] //nested array

const arr2 = arr1.flat(Infinity)//all array will be flatened all elemnents combined

console.log(arr2)
const arr3 = arr1.flat(1)
console.log(arr3)
// using datasrcipting in companies
console.log(Array.isArray("om"))//array
console.log(Array.from("om"))//convert to array
console.log(Array.from({car:"bmw",name:"om"})) //empty array directly not convert to kayvalue

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))


