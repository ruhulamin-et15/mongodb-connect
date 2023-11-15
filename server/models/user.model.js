
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    date: {
         type: Date,
         default: Date.now 
    }
});

const User = mongoose.model("users", userSchema);
module.exports = User;