const express = require("express");
const mysql = require("mysql");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const db = require("../database");
const router = express.Router();

router.post("/auth", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.json({
			error: true,
			massage: "Please fill in all fields",
		});
	}

	if (!validator.isEmail(email)) {
		return res.json({
			error: true,
			message: "Email format not accepted",
		});
	}
	try {
		const AuthUser = await new Promise((resolve, reject) => {
			db.query(
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

		if (AuthUser.length > 0) {
			const DBpassword = AuthUser[0].password;
			console.log(DBpassword);
			console.log(password);
			const passwordValid = await bcryptjs.compare(password, DBpassword);
			if (passwordValid) {
				return res.json({
					error: false,
					login: true,
					message: "Approved",
				});
			} else {
				return res.json({
					error: true,
					login: false,
					message: "Incorrect password",
				});
			}
		} else {
			return res.json({
				error: true,
				login: false,
				message: "Email not registered!",
			});
		}
	} catch (error) {
		console.error(error);
		return res.json({
			error: true,
			message: "An error occurred while processing your request",
		});
	}
});

module.exports = router;
