const express = require("express");
const dotenv = require("dotenv");
const User = require("../Models/User");
const jwt = require("jsonwebtoken"); //Sign Tokens
const bcrypt = require("bcrypt"); //Hash passwords

dotenv.config();

const router = express.Router(); //Create router to create router bundle

// Signup Route
// router.post("/signup", async (req, res) => {
const signup = async (req, res) => {
    try {

        const { firstName, lastName, userBio, userEmail, userMobile, userName, userPassword } = req.body;

        const existingUser = await User.findOne({ userEmail });
        if (existingUser) {
            res.status(401).send("User Already Exists with this Email");
        }

        const password = req.body.userPassword;
        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);

        const encryptPassword = await bcrypt.hash(password, salt);

        console.log("Request Body: ", req.body);
        const newUser = new User({
            firstName,
            lastName,
            userBio,
            userEmail,
            userMobile,
            userName,
            userPassword: encryptPassword,
        });


        await newUser.save();

        return res.status(201).json({ status: 'Ok', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};

// Login Route
// router.post("/login", async (req, res) => {
const login = async (req, res) => {
    try {

        const { userEmail, userPassword } = req.body;

        const user = await User.findOne({ userEmail });

        if (user) {
            const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);
            if (passwordMatch) {
                return res.json({ status: "OK", getUser: true })
            } else {
                return res.json({ status: "Error", getUser: false })
            }
        } else {
            return res.json({ status: "Error", getUser: false });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signup, login };