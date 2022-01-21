"use strict";

const response = require("./rest");
const connection = require("./koneksi");

exports.index = function (req, res) {
    response.ok("Rest server berjalan!", res);
};

// menampilkan semua data
exports.getBarang = function(req, res) {
    connection.query("SELECT * FROM tb_barang", function(error, rows, field) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}