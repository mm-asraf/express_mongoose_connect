const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

//connect db
connectDB();

//configure server

const app = express();
app.use(express.json());
app.use(cors());

//port
const PORT = 2566;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
