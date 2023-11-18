const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const SECRETKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
async function register(req, res) {
  console.log('req.body', req.body);
  try {
    const { firstName, lastName, email, mobile, password, confirmPassword } =
      req.body;
      console.log('req.body', req.body);
    const existingUser = await User.findOne({ email });

    // user is already existing, so bad request
    if (existingUser) return res.status(400).json({ status: "failed", msg: "User already exists" });
    
    if(password !== confirmPassword) return res.status(400).json({
      status : 'client error',
      statusbar : '400 Bad Request (Client Error)' ,
      msg : "Password don't match."
    })

    const hashPassword = await bcrypt.hash(password, 12);
    const  newUser = await User({ firstName, lastName, email, mobile, password : hashPassword }); 

    await newUser.save();
    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
      },
      SECRETKEY,
      { expiresIn: "1d" }
    );

      res.status(201).json({
        status: 'created', 
        statusbar : '201 Created', 
        msg : 'User is created successfully',
        data: {
          user: newUser,
          token: token,
        },
      })
  } catch (error) {
    res.status(500).json({status: 'failed', statusbar : '500 Internal server error' , msg : 'Something went wrong', 
  error : error?.message, stack : error?.stack})
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      // user is not registered yet need to register yourself.
      return res.status(404).json({ msg: "User does not exist." });
    }

    const isPasswordCorrect = await  bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({
        msg: "Invalid Credentials",
        statusbar: "400 Bad Request",
      });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      SECRETKEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: "success",
      data: {
        user: existingUser,
        token: token,
      },
    });
  } catch (error) {
  console.log("Internal server error")
 
 res.status(500).json({
  status: "failed", 
  error : error?.message, 
  stack : error?.stack
 })
  }
}

module.exports = { register, login, SECRETKEY };
