const express = require("express");
const router = express.Router();
const { postorderList,getOrderList} = require("../controllers/orderListController");


router.route("/").post(postorderList);
router.route("/").get(getOrderList);
module.exports = router;

