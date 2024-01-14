const express = require("express");
const dotenv = require("dotenv");
const Notes = require("../Models/Notes");
const multer = require("multer");
const path = require("path");


dotenv.config();

const storage = multer.memoryStorage();
var upload = multer({ storage: storage })


const uploadNote = async (req, res) => {
    try {
        const fileName = req.body.title;
        const fileDescription = req.body.description;
        const tags = req.body.tags;
        const file = req.file.filename;

        const newFile = new Notes({
            fileName: fileName,
            fileDescription: fileDescription,
            tags: tags,
            files: file
        });

        await newFile.save();
        res.send({status: "Ok"})

    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};

module.exports = { uploadNote };
