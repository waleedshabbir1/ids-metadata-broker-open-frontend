const User = require('../models/User');

function admin(req, res, next) {
  User.findById(req.user.id)
    .then(user => {
      if(user.role !== 'admin') {
        return res.status(403).json({msg: 'Admin required'});
      }
      next();
    })
    .catch(err => {
      return res.status(404).json({msg: 'User not found!'});
    })
}

module.exports = admin
