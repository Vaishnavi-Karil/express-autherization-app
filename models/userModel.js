const mongoose = require("mongoose"); // Erase if already required

const bcrypt = require("bcrypt");
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.models.User || mongoose.model("User", userSchema);

/*
REGISTER PAGE
- firstname
- lastname
- email
- password

*/
