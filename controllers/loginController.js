const asyncHandler = require("express-async-handler");
const { MongoClient,ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://thelaundrybasket02:parkavi2023@cluster0.d7e7ueo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const getlogin = asyncHandler(async (req, res) => {
   try {
  console.log("Body", req.body);
  await client.connect();
  const db = client.db('TheLaundryBasket');
  const orders = db.collection("signup")
  const second = await orders.find({
    username: req.body.username,
    password: req.body.password
  }).toArray();
  if (second.length > 0) {
    console.log(second);
    res.send(true);
  }
  else {
    console.log("error");
    res.send(false);
  }
} finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
});
module.exports = { getlogin }