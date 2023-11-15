const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user.model");


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// CRUID -> Create
app.post("/demo", async (req,res)=>{
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    const doc = await user.save();

    console.log(doc)
    res.status(201).send(doc);
});

// read
app.get("/demo",async (req,res)=>{
    const docs = await User.find({});
    res.status(200).json(docs);
})

module.exports = app;