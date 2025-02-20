let library = [
    {title:"HTML Basics",author:"Jhon",yearPublish:2020},
    {title:"CSS Basics",author:"Sara",yearPublish:2020},
    {title:"JS Basics",author:"Maxwel",yearPublish:2020}
]

console.log("My Library\n");
for (let i = 0; i < library.length; i++) {
    console.log(library[i]);
}

library.push({title:"System Design",author:"Areeb",yearPublish:2025});

console.log("\n Add Book on Library\n");
for (let i = 0; i < library.length; i++) {
    console.log(library[i]);
}

console.log("\n Search my Book from Library\n");
for (let i = 0; i < library.length; i++) {
    if (library[i].title == "System Design") {
        console.log(library[i]);
    }
}

console.log("\n Remove one Book from Library\n");
for (let i = 0; i < library.length; i++) {
    if (library[i].title == "CSS Basics") {
        library.splice(i,1)
    }
    console.log(library[i]);
}

console.log("\n Update Book Publish Year from Library\n");
for (let i = 0; i < library.length; i++) {
    if (library[i].yearPublish == 2020) {
        library[i].yearPublish = 2023;
    }
    console.log(library[i]);
}
