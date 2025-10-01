const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://owais:owais456@cluster0.jhrgmwt.mongodb.net/estore");
        console.log('Connected to monogo')
    } catch (error) {
        console.log({error: "When connecting to database"});
    }
}

module.exports = connectDb;