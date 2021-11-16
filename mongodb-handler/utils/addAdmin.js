const User = require('../models/User');

function addAdmin(username, password) {
  User.findOne({ username })
    .then(user => {
      if (!user) {
        new User({
          username,
          password,
          role: 'admin'
        }).save()
          .then(user => {
            console.log('Created admin user');
          })
      }
    })
}

module.exports = addAdmin;
