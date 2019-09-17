let http = require("http");
let fs = require("fs");
let PORT = 3000
let path = require('path');

const hostname = "localhost";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8",  (err, html) =>{
            if (err) throw err;
            res.statusCode=200;
            res.setHeader("Content-Type", "text/html");
            res.end(html)
        })
    }
    if (req.url === "/index.html") {
        fs.readFile("./public/index.html", "UTF-8",  (err, html) =>{
            if (err) throw err;
            res.statusCode=200;
            res.setHeader("Content-Type", "text/html");
            res.end(html)
        })
    }
    if (req.url === "/event.html") {
        fs.readFile("./public/event.html", "UTF-8",  (err, html) =>{
            if (err) throw err;
            res.statusCode=200;
            res.setHeader("Content-Type", "text/html");
            res.end(html)
        })
    }
    else if (req.url.match(/.css$/)) {
    
        let cssPath = path.join(__dirname, "public", req.url)
        let cssReadStream = fs.createReadStream(cssPath, "UTF-8")
    
        res.statusCode = 200;
        res.setHeader("Content-type", "text/css");
        cssReadStream.pipe(res)
    }
    else if (req.url.match(/.js$/)){
        let jsPath = path.join(__dirname, "public", req.url)
        let jsReadStream = fs.createReadStream(jsPath, "UTF-8")
    
        res.statusCode = 200;
        res.setHeader("Content-type", "application/javascript");
        jsReadStream.pipe(res)
    }

})
server.listen(PORT, hostname, () => {
    console.log("App running on port " + PORT + "!");
})
