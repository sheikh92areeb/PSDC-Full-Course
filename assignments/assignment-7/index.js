function reverseInt(num){

    let numStr = num.toString()
    let = revInt = ""

    for (let i = (numStr.length - 1); i >= 0; i--){
        revInt = revInt.concat("",numStr[i])
    }

    let result = parseInt(revInt)
    return result
}

console.log(reverseInt(523700))