function truncateString(str,len){
    if (len <= 0) {
        return "Length Atleast 1"
    }else{
        let result = str.slice(0,len)
        return result
    }
}

let str = "I am Areeb and I am Developer.";
let len = 0;

let result = truncateString(str, len)
console.log(result)
