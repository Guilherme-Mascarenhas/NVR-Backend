// Create new user

const express = require("express");
const mysql = require("mysql");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const uuid = require("uuid");
const database = require("../database");
const router = express.Router();

router.post("/new", async (req, res) => {
	const { email, password, name } = req.body;

	if (!email || !password || !name) {
		return res.json({
			error: true,
			massage: "Please fill in all fields",
		});
	}

	if (password.length < 5) {
		return res.json({
			error: true,
			massage: "Password must be longer than 5 char",
		});
	}

	if (!validator.isEmail(email)) {
		return res.json({
			error: true,
			massage: "Email format not accepted",
		});
	}
	try {
		const checkEmail = await new Promise((resolve, reject) => {
			database.query(
				"SELECT * FROM users WHERE email = ?",
				[email],
				(err, results) => {
					if (err) {
						return reject(err);
					} else {
						return resolve(results);
					}
				}
			);
		});

		if (checkEmail.length > 0) {
			return res.json({
				error: true,
				message: "Email already registered!",
			});
		}

		const hash = await bcryptjs.hash(password, 10);

		database.query(
			"INSERT INTO users (id_, name, email, password) VALUES (?,?,?,?)",
			[uuid.v4(), name, email, hash],
			(err, results, fields) => {
				if (err) {
					console.error("Error: ", err);
					return res.json({
						error: true,
						message: "Error Database",
					});
				} else {
					return res.json({
						error: false,
						message: "Registered with success!",
					});
				}
			}
		);
	} catch (error) {
		console.error(error);
		return res.json({
			error: true,
			message: "An error occurred while processing your request",
		});
	}
});

module.exports = router;
