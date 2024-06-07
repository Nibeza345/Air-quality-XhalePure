const express = require("express");
const authController = require("../controllers/authController");

const router = express.router();
r;
router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;