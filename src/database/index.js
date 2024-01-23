const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "camera_nvp",
})

db.connect((err) => {
    if (err) {
      console.log('Connection error:', err);
    } else {
      console.log('Connection database success');
    }
  });

  module.exports = db;