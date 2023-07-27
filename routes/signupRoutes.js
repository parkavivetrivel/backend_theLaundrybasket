const express = require("express");
const router = express.Router();
const { postSignup} = require("../controllers/signupController");

router.route("/").post(postSignup);
module.exports = router;