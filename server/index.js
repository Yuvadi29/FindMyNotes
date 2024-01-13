const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");

const app = express();
const PORT = 7000;

dotenv.config();
app.use(cors());


try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB Succesfully");
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

