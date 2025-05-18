function reqParser(url) {
    let req = url.split("://")[0];

    let afterProtocol = url.split("://")[1];
    let [hostPort, ...pathParts] = afterProtocol.split("/");
    let [host, portStr] = hostPort.split(":");
    let port = portStr ? parseInt(portStr) : "";

    let fullPath = pathParts.join("/");
    let [path, queryString] = fullPath.split("?");

    let query = {};

    if (queryString) {
        let params = queryString.split("&");
        for (let param of params) {
            let [key, value] = param.split("=");
            
            if (value === "true") value = true;
            else if (value === "false") value = false;
            else if (!isNaN(value)) value = Number(value);

            query[key] = value;
        }
    }

    return {
        req,
        host,
        port,
        path,
        query
    };
}

let url1 = "http://localhost:3000/users?isActive=true&membership=gold";
let url2 = "https://example.com/profile";
let url3 = "http://localhost:8080/home";

let result1 = reqParser(url1);
let result2 = reqParser(url2);
let result3 = reqParser(url3);

console.log(result1);
console.log(result2);
console.log(result3);