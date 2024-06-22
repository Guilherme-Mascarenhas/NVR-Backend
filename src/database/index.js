const mysql = require("mysql");

const database = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "camera-nvr",
});

database.connect((err) => {
	if (err) {
		console.log("Connection error:", err);
	} else {
		console.log("Connection database success");
	}
});

module.exports = database;
