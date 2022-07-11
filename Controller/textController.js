//import everything which is require
const express = require("express");
const { verifyToken } = require("../lib/utils");
const Model = require("../Model/textModel");
const router = express.Router();

//GET collection
router.get("/", (req, res) => {
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
router.post("/", (req, res) => {
//   if (req.payload.role == "admin") {
    const data = new Model({
        first_name: req.body.first_name,
        author: req.body.author,
        date:req.body.date,
        photo:req.body.photo,
        title:req.body.title,
        abstract:req.body.abstract,
        body:req.body.body,
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
//   } else {
//     res.status(403).json({
//       status: "failed",
//       data: [],
//       error: "you have not permissions",
//     });
//   }
});

//export
module.exports = router;
