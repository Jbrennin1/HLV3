const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [20, "username cannot be over 20 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false
  },
  highScore: {
    type: Number,
    required: true
  }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports =  User;
