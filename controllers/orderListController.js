const asyncHandler = require("express-async-handler");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://parkavivetrivel:bhargavi@cluster0.d7l6lca.mongodb.net/?authMechanism=DEFAULT";
const client = new MongoClient(uri);

const postorderList = asyncHandler(async (req, res) => {
  console.log("Body", req.body);
  await client.connect();
  const db = client.db('TheLaundryBasket');
  db.collection('orderList').insertOne({
            ServiceType:req.body.ServiceType ,
            NoOfShirts:req.body.NoOfShirts,
            NoOfPants:req.body.NoOfPants,
            NoOfLadiesTop:req.body.NoOfLadiesTop,
            NoOfBlouse:req.body.NoOfBlouse,
            NoOfDhoti:req.body.NoOfDhoti,
            NoOfSaree:req.body.NoOfSaree,
            NoOfShaul:req.body.NoOfShaul,
            totalitems:req.body.totalitems,
            totalamount:req.body.totalamount 
    

  });
  res.status(201).send(true);
});


module.exports = {
    postorderList
}