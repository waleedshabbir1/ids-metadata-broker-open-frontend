const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

require('dotenv/config');
const secret = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  try {
      const { username, password } = req.body;

      // Simple validation
      if(!username || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
      }

      // Check existing user
      const user = await User.findOne({ username }).exec()
      if(!user) return res.status(400).send({ msg: "The user does not exist" });

      // Validate password
      user.comparePassword(req.body.password, (err, match) => {
          if(!match) return res.status(400).send({ msg: "The password is invalid" });

          jwt.sign(
            { id: user.id },
            secret,
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  _id: user.id,
                  username: user.username,
                  role: user.role
                }
              })
            }
          )
      });

  } catch (err) {
      res.status(500).send({ msg: 'Internal Server Error'});
  }
})

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

module.exports = router;
