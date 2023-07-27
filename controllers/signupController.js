const asyncHandler = require("express-async-handler");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://parkavivetrivel:bhargavi@cluster0.d7l6lca.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const postSignup = asyncHandler(async (req, res) => {
  console.log("Body", req.body);
  await client.connect();
  const db = client.db('TheLaundryBasket');
  db.collection('signup').insertOne({
    
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).send(true);
  client.close();
});

module.exports = {
  postSignup
}
