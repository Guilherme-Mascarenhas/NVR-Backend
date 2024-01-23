const express = require("express");
const AuthLogin = require("./controller/AuthLogin");
const NewUser = require("./controller/NewUser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", AuthLogin);
app.use("/user", NewUser);

app.listen(3001, ()=>{

  console.log("Server API running");

});
