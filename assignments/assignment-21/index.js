// Object Define
const students = [
    {firstName: "Areeb", lastName: "Sheikh"},
    {firstName: "Kamran", lastName: "Butt"},
    {firstName: "Rizwan", lastName: "Khan"}
]

let result = students.map(student => student.firstName + " " + student.lastName)

console.log(result)