const express = require("express");
const router = express.Router();
const NotesController = require("../Controllers/NotesController");

// Upload Route
router.post("/upload", NotesController.uploadNote);

module.exports = router;