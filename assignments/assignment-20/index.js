// calculation functions declearation
const addition = (a,b) => a + b;
const subtraction = (a,b) => a - b;
const multiplacation = (a,b) => a * b;
const division = (a,b) => a / b;

// High Order Function of Calculation
function calculate(a, b, callBack){
    return callBack(a, b);
};

// calling function
let add = calculate(5, 4, addition); // output: 5 + 4 = 9
let sub = calculate(7, 3, subtraction); // output: 7 - 3 = 4
let mul = calculate(5, 4, multiplacation); // output: 5 * 4 = 20
let div = calculate(9, 5, division); // output: 9 / 5 = 1.8

// console the result
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);