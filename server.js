const express = require("express");
const app = express();
const port = 2023;
let cors = require("cors");
app.use(cors());
app.use((express.json()));
app.use("/order", require("./routes/orderRoutes"));

app.use("/signup", require("./routes/signupRoutes"));

app.use("/login", require("./routes/loginRoutes"));

app.use("/laundererdetail", require("./routes/laundererdetailRoutes"));

app.use("/orderList", require("./routes/orderListRoutes"));



app.listen(port, () => {
 console.log(`Server running on ports ${port}`);
});