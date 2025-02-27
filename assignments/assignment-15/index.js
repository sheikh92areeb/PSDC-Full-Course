function chunkyMonkey(array, size) {
    let result = [];
    
    // With While Loop
    // let index = 0;
    // while (index < array.length) {
    //     result.push(array.slice(index, index + size));
    //     index += size;
    // }   

    // With For Loop
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    
    return result;
}

let array = [1,2,3,4,5,6,7,8,9]
let size = 5

let result = chunkyMonkey(array, size);

console.log(result)