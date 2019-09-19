let http = require("http");
let fs = require("fs");
let PORT = 3000
let path = require('path');
const mysql = require("mysql")
const { parse } = require('querystring');


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
    if (req.url.match(/.css$/)) {
    
        let cssPath = path.join(__dirname, "public", req.url)
        let cssReadStream = fs.createReadStream(cssPath, "UTF-8")
    
        res.statusCode = 200;
        res.setHeader("Content-type", "text/css");
        cssReadStream.pipe(res)
    }
    if (req.url.match(/.js$/)){
        let jsPath = path.join(__dirname, "public", req.url)
        let jsReadStream = fs.createReadStream(jsPath, "UTF-8")
    
        res.statusCode = 200;
        res.setHeader("Content-type", "application/javascript");
        jsReadStream.pipe(res)
    }
    if(req.method === "POST"){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            addToDb(parse(body));
            res.end('ok');
        });
    }
})

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "eventsDB"
})

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack)
    }
    console.log("connected as id " + connection.threadId)
})

function addToDb(req,res) {
    console.log(req.title)
    connection.query("INSERT INTO events Set ?",
        {
            title: req.title,
            paragraph: req.paragraph,
            image:req.image,
            created_at: "2019-10-10"
        }, function (err, res) {
            if (err) throw err;
            console.log("You have added the following!", res)
        }
    )
}

server.listen(PORT, hostname, () => {
    console.log("App running on port " + PORT + "!");
})
