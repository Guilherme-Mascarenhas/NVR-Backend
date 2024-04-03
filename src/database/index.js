const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "camera-nvr",
});

db.connect((err) => {
	if (err) {
		console.log("Connection error:", err);
	} else {
		console.log("Connection database success");
	}
});

module.exports = db;
