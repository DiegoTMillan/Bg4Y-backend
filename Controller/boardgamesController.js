//import everything which is require
const express = require("express");
const { verifyToken, generateToken } = require("../lib/utils");
const Model = require("../Model/boardgameModel");
const router = express.Router();

//GET collection
router.get("/", (req, res) => {
// router.get("/", verifyToken, (req, res) => {
  Model.find()
    .exec()
    .then((data) => {
      console.log(data);
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
router.get("/:id", (req, res) => {
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
      name: req.body.name,
      editorial: req.body.editorial,
      author: req.body.author,
      numPlayers: req.body.numPlayers,
      avgMinDuration: req.body.avgMinDuration,
      minAgeRecommended: req.body.minAgeRecommended,
      expansions: req.body.expansions,
      game_name: req.body.game_name,
      photo: req.body.photo
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
          data,
          error: "the insertion has failed",
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
//PATCH update document
router.patch("/:id", verifyToken, (req, res) => {
  let id = req.params.id;
  let data = req.body;
  let options = {
    new: true,
  };
  if (req.payload.role == "admin") {
    Model.findByIdAndUpdate(id, data, options)
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
          error: "the update has failed",
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
