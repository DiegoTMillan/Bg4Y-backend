const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        required: true,
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    phone: {
        type: String,
    },
    city: {
        required: true,
        type: String,
    },
    district: {
        required: true,
        type: String,
    },
    role: {
        required: true,
        type: String,
    },
    photo:{
        type: String,
    },
    game_name: {
        type: String,
    }

})

module.exports = mongoose.model("user", userSchema);