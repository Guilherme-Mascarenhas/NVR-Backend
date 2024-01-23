//Autenticar e permitir logar 
const express = require("express");

const router = express.Router();

router.post("/auth", async (req, res)=>{

    const {email, password} = req.body;

    console.log(email, password);
    return res.json({
        error:false,
        massage: "Registred with success!"
});
});

module.exports = router;