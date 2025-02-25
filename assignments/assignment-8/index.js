function hideEmail(email) {
    let [username, domain] = email.split("@")

    let subStr = username.slice(1,-1)
    let hide = ""


    for (let i = 0; i < subStr.length; i++){
        hide = hide.concat("",subStr[i].replace(subStr[i],"*"))
    }

    let hideEmail = username[0] + hide + username[username.length - 1] + "@" + domain;
    return hideEmail
}

let email = "alikhan@gmail.com";

console.log(email)
console.log(hideEmail(email))