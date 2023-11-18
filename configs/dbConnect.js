const mongoose = require("mongoose");
async function dbConnect() {
  try {
    mongoose.connect(
      "mongodb+srv://vaishnavigkaril:65MiwNTwk7mmbfiH@digitic.mw7pyws.mongodb.net/digiticdb?retryWrites=true&w=majority"
    );
    console.log('database is successfully connected.')
  } catch (error) {
    console.log("Database connection error", error);
  }
}
// vaishnavigkaril
// 65MiwNTwk7mmbfiH

module.exports = dbConnect;