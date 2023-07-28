const asyncHandler = require("express-async-handler");
const { MongoClient,ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://parkavivetrivel:bhargavi@cluster0.d7l6lca.mongodb.net/?authMechanism=DEFAULT";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const postorderList = asyncHandler(async (req, res) => {
  try {
  console.log("Body", req.body);

  await client.connect();
  const db = client.db('TheLaundryBasket');
  const collection = db.collection('orderList');
  const third = await collection.insertOne({
            ServiceType:req.body.ServiceType ,
            NoOfShirts:req.body.NoOfShirts,
            NoOfPants:req.body.NoOfPants,
            NoOfLadiesTop:req.body.NoOfLadiesTop,
            NoOfBlouse:req.body.NoOfBlouse,
            NoOfDhoti:req.body.NoOfDhoti,
            NoOfSaree:req.body.NoOfSaree,
            NoOfShaul:req.body.NoOfShaul,
            totalitems:req.body.totalitems,
            totalamount:req.body.totalamount,
  });
  console.log(third);
  res.status(201).send(true);
}

finally {
  // Close the database connection when finished or an error occurs
  await client.close();
}

});
module.exports = {
    postorderList
}