let str = "My Name is Areeb";
let backward = "";

for (let i = str.length -1; i >= 0; i--) {
    backward = backward.concat("", str[i]);
}
console.log(`Backword String ${backward}`);

