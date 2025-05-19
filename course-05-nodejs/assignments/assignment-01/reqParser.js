// Request Parser for converting URL string into object
function reqParser(url) {

    // Decode the URL to handle any encoded characters
    const decodedUrl = decodeURIComponent(url);
    
    const [protocol, rest] = decodedUrl.split("://");
    const [hostPort, ...pathParts] = rest.split("/");
    const [host, portStr] = hostPort.split(":");
    const port = portStr ? parseInt(portStr) : "";

    const fullPath = pathParts.join("/");
    const [path, queryString] = fullPath.split("?");

    const query = {};

    if (queryString) {

        const params = queryString.split("&");

        for (let param of params) {
            let [key, value] = param.split("=");

            // Convert to boolean/number if applicable
            if (value === "true") value = true;
            else if (value === "false") value = false;
            else if (!isNaN(value) && value.trim() !== "") value = Number(value);

            // Array-like handling
            if (key.endsWith("[]")) {
                key = key.slice(0, -2);
                if (!Array.isArray(query[key])) {
                    query[key] = [];
                }
                query[key].push(value);
            } else if (query.hasOwnProperty(key)) {
                // Handle repeated keys (not [] but still duplicated)
                if (!Array.isArray(query[key])) {
                    query[key] = [query[key]];
                }
                query[key].push(value);
            } else {
                query[key] = value;
            }
        }
    }

    return {
        req: protocol,
        host,
        port,
        path: path || "",
        query
    };
}

let url1 = "https://example.com/home";
let result1 = reqParser(url1);  // output {req: "https", host: "example.com",port: "",path: "home", query: {} }
console.log(result1);

let url2 = "http://localhost:3000/dashboard";
let result2 = reqParser(url2);  // output {req: "http", host: "localhost",port: 3000,path: "dashboard", query: {} }
console.log(result2);

let url3 = "https://api.test.com/data?active=true&count=5";
let result3 = reqParser(url3);  // output {req: "https", host: "api.test.com",port: "",path: "data", query: {active: true, count: 5} }
console.log(result3);

let url4 = "http://localhost:3000/?isLoggedIn=false";
let result4 = reqParser(url4);  // output {req: "http", host: "localhost",port: 3000,path: "", query: {isLoggedIn: false} }
console.log(result4);

let url5 = "https://site.com/search?q=shoes&brand=nike&price=199";
let result5 = reqParser(url5);  // output {req: "https", host: "site.com",port: "",path: "search", query: {q: "shoes", brand: "nike", price: 199} }
console.log(result5);

let url6 = "https://shop.com/items?tags[]=fashion,summer,2024";
let result6 = reqParser(url6);  // output {req: "https", host: "shop.com",port: "",path: "items", query: {tags: ["fashion", "summer", "2024"]} }
console.log(result6);

let url7 = "https://shop.com/items?tags[]=fashion&tags[]=summer&tags[]=2024";
let result7 = reqParser(url7);  // output {req: "https", host: "shop.com",port: "",path: "items", query: {tags: ["fashion", "summer", "2024"]} }
console.log(result7);

let url8 = "https://dashboard.io/stats?loggedIn=true&role=admin";
let result8 = reqParser(url8);  // output {req: "https", host: "dashboard.io",port: "",path: "stats", query: {loggedIn: true, role: "admin"} }
console.log(result8);

let url9 = "http://localhost:8080/app?attempts=3&debug=false&theme=dark";
let result9 = reqParser(url9);  // output {req: "http", host: "localhost",port: 8080,path: "app", query: {attempts: 3, debug: false, theme: "dark"} }
console.log(result9);

let url10 = "http://127.0.0.1:5000";
let result10 = reqParser(url10);  // output {req: "http", host: "127.0.0.1",port: 5000,path: "", query: {} }
console.log(result10);

let url11 = "https://site.com/path?name=John%20Doe&city=New%20York";
let result11 = reqParser(url11);  // output {req: "https", host: "site.com",port: "",path: "path", query: {name: "John Doe", city: "New York"} }
console.log(result11);

let url12 = "https://shop.com/product?size=xl&size=xxl&size=medium";
let result12 = reqParser(url12);  // output {req: "https", host: "shop.com",port: "",path: "product", query: {size: ["xl", "xxl", "medium"]} }
console.log(result12);

