const usersModel = require("../models/users");
const bcrypt = require("bcryptjs");

exports.store = async function ({
  name,
  surname,
  username,
  email,
  password,
  dateOfBirth,
}) {
  return usersModel.createNewUser({
    name,
    surname,
    email,
    username,
    password: bcrypt.hashSync(password),
    dateOfBirth,
  });
};
