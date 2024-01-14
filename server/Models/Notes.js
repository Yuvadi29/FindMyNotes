const mongoose = require("mongoose");


const NoteSchema = mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    fileDescription: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    files: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Notes", NoteSchema);