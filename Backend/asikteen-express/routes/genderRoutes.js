const express = require("express");
const router = express.Router();
const genderController = require("../controllers/genderController");

router.get("/gender", genderController.getAllGender);

module.exports = router;