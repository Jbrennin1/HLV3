const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { connectToDb } = require('../db')

const register = async (req, res, next) => {
  const db = await connectToDb();
  const usersCollection = db.collection('users')
  const { name, password } = req.body;

  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const result = await usersCollection.insertOne({
      name,
      password: hashedPass,
      highScore: 0
    })

    res.json({ message: 'User added successfully' });
  } catch (err) {
    console.error(err)
    res.json({message: 'Error occurred'})
  }
}

const login = async (req, res, next) => {
  const db = await connectToDb();
  const usersCollection = db.collection('users')
  const { name, password } = req.body;


  try {
    user = await usersCollection.findOne({name: name})
    bcrypt.compare(password, user.password, (err, result) => {
      if(err) {
        res.json({
          error: err
       })
      }
      else if(result) {
        let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
        req.session.name = user.name
        //console.log(user.highScore)
        console.log(user.name)
        console.log('hit')
        req.session.highScore = user.highScore
        res.json({
          message: 'Login Successful!',
          token
        })
        res.redirect('/')
      } else {
        res.json({
          message: 'Password does not match!'
        })
      }
    })
  } catch (err) {
    res.json({message: 'No User Found!'})
  }

}




module.exports = {
  register, login
}