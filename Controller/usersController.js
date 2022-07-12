//import everything which is require
const express = require("express");
const { verifyToken } = require("../lib/utils");
const Model = require("../Model/userModel");
const router = express.Router();

//GET collection
router.get("/", verifyToken, (req, res) => {
  Model.find()
    .exec()
    .then((data) => {
      // console.log(data);
      res.status(200).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data: [],
        error: error.message,
      });
    });
});
//GET details
router.get("/:id", verifyToken, (req, res) => {
  Model.findById(req.params.id)
    .exec()
    .then((data) => {
      res.status(200).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data: [],
        error: "the id is wrong",
      });
    });
});
//POST insert document
router.post("/", verifyToken, (req, res) => {
  if (req.payload.role == "admin") {
    const data = new Model({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      city: req.body.city,
      district: req.body.district,
      role: req.body.role,
      photo: req.body.photo,
      game_name: req.body.game_name,
    });
    data
      .save()
      .then((data) => {
        res.status(201).json({
          status: "succeeded",
          data,
          error: null,
        });
      })
      .catch((error) => {
        res.status(404).json({
          status: "failed",
          data: [],
          error: "the insertion has failed",
        });
      });
  } else {
    res.status(403).json({
      status: "failed",
      data: [],
      error: "you have not permissions",
    });
  }
});
//PATCH update document
router.patch("/:id", verifyToken, (req, res) => {
  console.log(req.body);
  let id = req.params.id;
  let data = req.body;
  let options = {
    new: true,
  };
  Model.findByIdAndUpdate(id, data, options)
    .then((data) => {
      console.log(data);
      res.status(201).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data,
        error: "the update has failed",
      });
    });
});
//Delete by id
router.delete("/:id", verifyToken, (req, res) => {
  let id = req.params.id;
  if (req.payload.role == "admin") {
    Model.findByIdAndDelete(id)
      .then((data) => {
        res.status(201).json({
          status: "succeeded",
          data,
          error: null,
        });
      })
      .catch((error) => {
        res.status(404).json({
          status: "failed",
          data,
          error: "deletion has failed",
        });
      });
  } else {
    res.status(403).json({
      status: "failed",
      data: [],
      error: "You do not have permissions",
    });
  }
});

//export
module.exports = router;