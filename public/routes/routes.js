const connection = require("../database/eventsDB.js")

module.exports = function(){
    connection.query("INSERT INTO events Set",
    {
        heading:"hihih",
        body:"there",
        created_at:"2019-10-10"
    },function (err){
        if(err) throw err;
        console.log("You have added the following! ")
    }
    )
}

getStarted()