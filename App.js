const express = require("express")

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rotas
app.get("/",(req,res)=>{return res.json({Message: "ola mundo"})})

//export
module.exports = app