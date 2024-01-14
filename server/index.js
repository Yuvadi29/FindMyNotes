const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth");

const app = express();
const PORT = 7000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB Succesfully");
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => {
    res.send("Server is Working");
})

app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

