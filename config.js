const mysql = require("mysql2")

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vralok@10",
  database:"localhost_videomagic"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports=con;