const express = require("express");
const dotenv = require("dotenv");
const Notes = require("../Models/Notes");
const multer = require("multer");
const path = require("path");

dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadNote = async (req, res) => {
    try {
        const { fileName, fileDescription, tags } = req.body;

        // Check if a file is attatched to request
        if (!req.file) {
            return res.status(400).json({ error: "File Is Required" });
        }

        // Extract file Data
        const fileData = req.file.buffer;
        const contentType = req.file.mimetype;

        console.log(fileData);

        // Create a new Note
        const newNote = new Notes({
            fileName: fileName,
            fileDescription: fileDescription,
            tags: tags,
            files: {
                data: fileData,
                contentType: contentType,
            },
        });

        await newNote.save();

        res.status(201).json({ status: "Note uploaded successfully", note: newNote });

    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};



module.exports = { uploadNote };