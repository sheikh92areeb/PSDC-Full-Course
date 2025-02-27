function decodeCipher(message){

    let hash = { G:"A", A:"G", D:"E", E:"D", R:"Y", Y:"R", P:"O", O:"P", L:"U", U:"L", K:"I", I:"K"}

    let decode = "";

    for (let i = 0; i < message.length; i++) {
        if (hash[message[i].toUpperCase()]){
            decode += hash[message[i].toUpperCase()];
        }else {
            decode += message[i];
        }
    }
    return decode;
}

let message = "Hi I am a Developer";
let encode = "HK K Gm G EDvDUPODY";

let code = decodeCipher(message);
let decode = decodeCipher(encode);

console.log("Message encoded: ", code)
console.log("Message decoded: ", decode)