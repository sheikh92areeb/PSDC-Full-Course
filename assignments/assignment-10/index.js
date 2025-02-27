function countVowel(str) {
    vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


let str = "Hello World!";

console.log(countVowel(str));