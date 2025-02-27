const products = ['mouse', 'keyboard', 'speaker', 'mouse', 'speaker', 'monitor']

const frequencyCounter = {}

for (const product of products) {
    if (!frequencyCounter[product]) {
        frequencyCounter[product] = 1
    }else {
        frequencyCounter[product] = frequencyCounter[product] + 1
    }
}

console.log(frequencyCounter)