const mongoose = require('mongoose')

var Employee = mongoose.model('Employee', {
  name: { type: String },
  email: { type: String },
  position: { type: String },
  location: { type: String }
});
module.exports = { Employee }