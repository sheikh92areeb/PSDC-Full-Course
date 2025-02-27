function createCounter (num) {
    return {
        increment: function () {
            return ++num;
        },

        decrement: function () {
            return --num;
        },

        reset: function () {
            return num;
        }
    };
}

let counter = createCounter(5);

let ic = counter.increment();
let de = counter.decrement();
let re = counter.reset();

console.log(ic, de, re)