const express = require("express");
const router = express.Router();
const { postorderList} = require("../controllers/orderListController");


router.route("/").post(postorderList);
module.exports = router;

