function getRandomNumber(min,max) {
    return Math.floor( min +  Math.random() * max);
}

console.log(getRandomNumber(1, 5));