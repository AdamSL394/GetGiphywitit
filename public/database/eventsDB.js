let mysql = require("mysql")

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
    addToDb()
})

function addToDb() {
    console.log("Inserting a new product...\n");
    connection.query("INSERT INTO events Set ?",
        {
            heading: "hihih",
            body: "there",
            created_at: "2019-10-10"
        }, function (err, res) {
            if (err) throw err;
            console.log("You have added the following!", res)
        }
    )
}

// module.exports = connection