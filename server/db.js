const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CRUDDB', err => {
  if (!err) {
    console.log("MONGODB Connection successfully .......")
  }
  else {
    console.log("Error in DB connection:" + JSON.stringify(err, undefined, 2))
  }
});

module.exports = mongoose;