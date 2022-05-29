const bcrypt = require("bcrypt");
const saltRounds = 12;
const txtprefix = "NsrData_Stream_System";

const hashStrSync = ($txtSalt) => {
  return bcrypt.hashSync(`${txtprefix}${$txtSalt}`, saltRounds);
};

const compareStrSync = ($txtSalt, txtHash) => {
  return bcrypt.compareSync(`${txtprefix}${$txtSalt}`, txtHash);
};

module.exports = { hashStrSync, compareStrSync };
