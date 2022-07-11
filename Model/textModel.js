const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
    {
        author: {
            required: true,
            type: String,
        },
        date: {
            required: true,
            type: String,
        },
        photo: {
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        abstract: {
            required: true,
            type: String,
        },
        body: {
            required: true,
            type: String,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model("text", textSchema);