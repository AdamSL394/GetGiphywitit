let mysql = require("mysql")

const connection = mysql.createConnection({
    host:"localhost",
    port: 3000,
    user:"root",
    password:"password",
    database:"eventsDB"
})

connection.connect(function(err){
    if(err) throw err;
    start();
})