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
        data: Buffer,
        contentType: String,
        required: true,
    },

});

module.exports = mongoose.model("Notes", NoteSchema);