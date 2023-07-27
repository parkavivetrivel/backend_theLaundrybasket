const asyncHandler = require("express-async-handler");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kavisquare:nonewpw@cluster0.jgaacpq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const getOrder = asyncHandler( async (req, res) => {
    await client.connect();
    const db = client.db('TheLaundryBasket');
    const orders = await db.collection('orderList').find().toArray();
    console.log(orders);
    res.send(orders);
  });
const postOrder = asyncHandler( async(req, res) => {
    console.log("Body", req.body);
    await client.connect();
    const db = client.db('TheLaundryBasket');
    db.collection('order').insertOne({
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        time: req.body.time,
    });
    res.status(201).send(true);
    db.close();
  });


  module.exports = { getOrder,postOrder}
