const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

//connect db
connectDB();

//configure server

const app = express();
app.use(express.json());
app.use(cors());

//apis
//test api
app.get("/users", async (req, res) => {
  try {
    return res.status(200).send("<h1>i am working fine</h1>");
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

//port
const PORT = 2566;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
