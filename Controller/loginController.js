const express = require("express");
const Model = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { generateToken, verifyRefreshToken } = require("../lib/utils");

//user registrer
router.post("/new", async (req, res) => {
  const data = new Model({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
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
        data,
        error: error.message,
      });
    });
});
//user login
router.post("/", (req, res) => {
  Model.find({ email: req.body.email })
    .exec()
    .then((result) => {
      console.log(result);
      if (result.length > 0) {
        bcrypt.compare(
          req.body.password,
          result[0].password,
          (error, response) => {
            if (error) {
              res.status(404).json({
                status: "failed",
                data: result[0],
                error: error.message,
              });
            } else if (response) {
              res.status(201).json({
                status: "succeeded",
                //pilo
                data: {
                  info: result,
                  token: generateToken(result, false),
                  refreshToken: generateToken(result, true),
                },
                error: null,
              });
            } else {
              res.status(403).json({
                status: "failed",
                data: [],
                error: "Wrong username or password",
              });
            }
          }
        );
      } else {
        res.status(403).json({
          status: "failed",
          data: [],
          error: "Wrong username or password",
        });
      }
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data: [],
        error: error.message,
      });
    });
});
//refresh token
router.post("/refresh", verifyRefreshToken, (req, res) => {
  try {
    let authHeader = "";
    if (req.headers.hasOwnProperty("authorization")) {
      authHeader = req.headers["authorization"];
    }
    if (authHeader == null) {
      res.status(400).json({
        status: "failed",
        data: [],
        error: "Authorization not found",
      });
    }
    const token = authHeader.split(" ")[1];
    let payload = [jwt.decode(token)];
    res.status(201).json({
      status: "succeeded",
      //pilo
      data: {
        token: generateToken(payload, false),
        refreshToken: generateToken(payload, true),
      },
      error: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      data: [],
      error: error.message,
    });
  }
});

module.exports = router;
