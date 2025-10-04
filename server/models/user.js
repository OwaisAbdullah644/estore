const mongoose = require("mongoose");

const users = new mongoose.Schema({
    name: String,
    email : String,
    password : String,
    role : String
});

module.exports = mongoose.model("Users", users);