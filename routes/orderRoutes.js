const express = require("express");
const router = express.Router();
const { getOrder,postOrder } = require("../controllers/orderController");

router.route("/").get(getOrder);
router.route("/").post(postOrder);
module.exports = router