const mongoose = require("mongoose");

const boardgameSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
        },
        editorial: {
            required: true,
            type: String,
        },
        author: {
            required: true,
            type: Array,
        },
        numPlayers: {
            min: {
                required: true,
                type: Number,
            },
            max: {
                required: true,
                type: Number,
            },
        },
        avgMinDuration: {
            required: true,
            type: Number,
        },
        minAgeRecommended: {
            required: true,
            type: Number,
        },
        expansions: {
            type: Array,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model("boardgame", boardgameSchema);