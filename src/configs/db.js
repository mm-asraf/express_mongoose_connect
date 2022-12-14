const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/apps", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb connect at ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
