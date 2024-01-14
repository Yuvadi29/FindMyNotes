const express = require("express");
const dotenv = require("dotenv");
const User = require("../Models/User");
// const bcrypt = require("bcrypt"); //Hash passwords
// const jwt = require("jsonwebtoken"); //Sign Tokens

dotenv.config();

const router = express.Router(); //Create router to create router bundle

// Signup Route
router.post("/signup", async (req, res) => {
    try {
        // const password = req.body.password;
        // const saltRounds = 10;

        // const salt = await bcrypt.genSalt(saltRounds);

        // const encryptPassword = await bcrypt.hash(password, salt);

        console.log("Request Body: ", req.body);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userBio: req.body.userBio,
            gender: req.body.gender,
            userEmail: req.body.userEmail,
            userMobile: req.body.userMobile,
            userName: req.body.userName,
            userPassword: req.body.userPassword,
        });

        await newUser.save();

        console.log(newUser);
        res.json({ status: 'Ok' });
    } catch (error) {
        res.status(400).json({ error });
        console.log(error);
    }
});

// Login Route
router.post("/login", async (req, res) => {
    try {
        const getUser = await User.findOne({
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword,
        });

        if (getUser) {
            return res.json({ status: "OK", getUser: true })
        } else {
            return res.json({ status: "Error", getUser: false })
        }
    } catch (error) {
        res.status(400).json({ error });
    }
});

module.exports = router;