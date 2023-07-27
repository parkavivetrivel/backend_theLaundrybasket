 const express = require("express");
 const router = express.Router();
 const {postlaundererdetail} = require("../controllers/laundererdetailController");

 router.route("/").post(postlaundererdetail);
module.exports = router;