const express = require('express')
const router = express.Router()
const { Employee } = require('../models/employee')

var ObjectId = require('mongoose').Types.ObjectId

router.get('/', (req, res) => {
  Employee.find((err, json) => {
    if (!err) {
      res.send(json)
    }
    else {
      console.log("Error in Retrieving data", JSON.stringify(err, undefined, 2))
    }
  })
})
router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("No record found for id:${req.body.id} ");
  Employee.findById(req.params.id, (err, des) => {
    if (!err) {
      res.send(des)
    }
    else {
      console.log("Error in Retrieving data", JSON.stringify(err, undefined, 2))
    }
  })

})

router.post('/', (req, res) => {
  var emp = new Employee({
    name: req.body.name,
    email: req.body.email,
    position: req.body.position,
    location: req.body.location
  });
  emp.save((err, des) => {
    if (!err) {
      res.send(des)
    } else {
      console.log("Error in writing data in db", JSON.stringify(err, undefined, 2))
    }
  })
})


router.put('/:id', (req, res) => {
  var emp = {
    name: req.body.name,
    email: req.body.email,
    position: req.body.position,
    location: req.body.location
  }
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("No record found for id:${req.params.id} ");
  Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, des) => {

    if (!err) {
      res.send(des)
    } else {
      console.log("Error in writing data in db", JSON.stringify(err, undefined, 2))
    }
  })
})

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("No record found for id:${req.params.id} ");

  Employee.findByIdAndRemove(req.params.id, (err, des) => {

    if (!err) {
      res.send(des)
    } else {
      console.log("Error in writing data in db", JSON.stringify(err, undefined, 2))
    }
  })
})


module.exports = router;