for (let i = 10; i <= 100; i+=10) {
    if (i == 50) {
        console.log("Half Way There!");
    }else if (i == 100) {
        console.log("You made it!");
    }else {
        console.log("Checkpoint", i);
    }
}
console.log("All, Done\n");


for (let i = 10; i <= 100; i+=10) {
    (i == 50)?console.log("Half Way There!"):
    (i == 100)?console.log("You made it!"):
    console.log("Checkpoint", i)
}
console.log("All, Done\n");
