const { User } = require('../database/models');

exports.createNewUser = function(user) {
  return User.create(user);
}