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

        const uploadedBy = req.body.userId;
        console.log(uploadedBy);

        const newFile = new Notes({
            fileName: fileName,
            fileDescription: fileDescription,
            tags: tags,
            files: file,
            uploadedBy: uploadedBy
        });

        await newFile.save();
        res.send({ status: "Ok" })

    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};


const getNote = async (req, res) => {
    try {
        await Notes.find({}).then(data => {
            res.send({ status: "ok", data: data });
        })
    } catch (error) {
        console.log(error);
    }
};

const getNoteByID = async (req, res) => {
    try {
        const userID = req.params.id;
        console.log(userID);

        await Notes.find({ uploadedBy: userID }).then(data => {
            res.send({ data: data });
        })
    } catch (error) {
        console.log(error);
    }
};


module.exports = { uploadNote, getNote, getNoteByID };
