const students = [
    {name: "Areeb", score:60},
    {name: "Kamran", score:44},
    {name: "Rizwan", score:78},
    {name: "Ali", score:42},
    {name: "Mehmood", score:90},
    {name: "Saim", score:59}
]

let passed = students.filter(pass => pass.score >= 60)

let passed_students = passed.map(student => student.name)

console.log(passed_students)