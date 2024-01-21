const express = require("express");
const router = express.Router();
const authController = require("../Controllers/AuthController");
const multer = require("multer");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = "./images";
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({
    storage: storage
});

// Signup Route
// router.post("/signup", authController.signup);
router.post("/signup", upload.single("profileImage"), authController.signup);

//Login Route
router.post("/login", authController.login);

module.exports = router;