// Simple array of object
var students = [
    {
        name: "John",
        age: 20,
        grade: "A"
    },
    {
        name: "Jane",
        age: 22,        
        grade: "B"
    },
    {
        name: "Doe",
        age: 21,
        grade: "C"
    }
];
//accessing object properties
console.log(students[0].name); // John
console.log(students[1].age); // 22
console.log(students[2].grade); // C
//looping through array of objects
for (var i = 0; i < students.length; i++) {
    console.log(students[i].name + " is " + students[i].age + " years old and has grade " + students[i].grade);
}