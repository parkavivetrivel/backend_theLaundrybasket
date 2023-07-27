const asyncHandler = require("express-async-handler");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://parkavivetrivel:bhargavi@cluster0.d7l6lca.mongodb.net/?authMechanism=DEFAULT";
const client = new MongoClient(uri);

const getlogin = asyncHandler(async (req, res) => {
  console.log("Body", req.body);
  await client.connect();
  const db = client.db('TheLaundryBasket');
  const orders = await db.collection("signup").find({
    username: req.body.username,
    password: req.body.password
  }).toArray();
  if (orders.length > 0) {
    console.log(orders);
    res.send(true);
  }
  else {
    console.log("error");
    res.send(false);
  }

});
module.exports = { getlogin }