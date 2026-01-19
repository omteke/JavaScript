// this is good way to print string
// String Interpolation
let name = "om"
console.log(`hello my name is ${name}`);  // template literal

const a = new String("om teke")
console.log(a)
console.log(a.length)
console.log(a[0])
console.log(a[1])
console.log(a.charAt(1))
console.log(a.toUpperCase(1))
console.log(a.toLowerCase(2))
console.log(a.charCodeAt(1))
console.log(a.indexOf("o"))
console.log(a.lastIndexOf("om"));
console.log(a.includes("om"))
console.log(a.slice(0,2))
console.log(a.substring(2,4))

let s = "I like tea. tea is nice.";

console.log(s.replace("tea", "coffee"));      // only first match
console.log(s.replaceAll("tea", "coffee"));   // all matches


// console.log(a.Charat[0])
let b = "  om  "
console.log(b)
console.log(b.trim())

let s1 = "a,b,c";

let arr = s1.split(",");  // ["a","b","c"]
console.log(arr);

console.log(arr.join("-")); // "a-b-c"

console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"




