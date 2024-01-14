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
        type: Array,
        required: true,
    },
    file: {
        data: {
            type: Buffer,
            required: true,
        },
        contentType: {
            type: String,
            required: true,
        },
    },
});

module.exports = mongoose.model("Notes", NoteSchema);