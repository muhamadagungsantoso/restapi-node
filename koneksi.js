const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_gudang"
});

conn.connect((err) => {
    if(err) throw err;
    console.log("MYSQL terkoneksi!");
});

module.exports;