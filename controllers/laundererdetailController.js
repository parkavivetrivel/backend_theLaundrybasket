const asyncHandler = require("express-async-handler");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://parkavivetrivel:bhargavi@cluster0.d7l6lca.mongodb.net/?authMechanism=DEFAULT";
const client = new MongoClient(uri);

const postlaundererdetail = asyncHandler(async (req, res) => {
  console.log("Body", req.body);
  await client.connect();
  const db = client.db('TheLaundryBasket');
  db.collection('laundererdetail').insertOne({
    Launderername: req.body.Launderername,
    Laundereraddress: req.body.Laundereraddress,
    Timetaken : req.body.Timetaken,
    Pricing : req.body.Pricing,
    //zones : req.body.zones
  });
  res.status(201).send(true);
});
module.exports = {postlaundererdetail}