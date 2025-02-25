function discountCalculator(price, persecnt){
    let discount = price * persecnt / 100;
    let finalPrice = price - discount;
    return finalPrice;
}

let price = 799;
let disPer = 45;

let discountPrice = discountCalculator(price, disPer)

let result = `Product Price is ${price},\nwith ${disPer + "%"} Discount,\nThe Final Price is ${discountPrice}`

console.log(result)