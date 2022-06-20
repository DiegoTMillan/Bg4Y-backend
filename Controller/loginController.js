const express = require("express");
const Model = require("../Model/loginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { generateToken, verifyRefreshToken } = require("../lib/utils");

//user registrer
router.post("/new", async (req, res) => {
  const data = new Model({
    email: req.body.email,
    //encrypting
    password: await bcrypt.hash(req.body.password, 10),
    role: req.body.role,
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
              ResizeObserver.status(404).json({
                status: "failed",
                data: result[0],
                error: error.message,
              });
            } else if (response) {
              res.status(201).json({
                status: "succeeded",
                //pilo
                data: {
                  token: generateToken(result, false),
                  refreshToken: generateToken(result, true),
                },
                error: null,
              });
            } else {
              res.status(403).json({
                status: "failed",
                data,
                error: "Wrong username or password",
              });
            }
          }
        );
      } else {
        res.status(403).json({
          status: "failed",
          data,
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
router.post("/refresh", verifyRefreshToken,  (req, res) => {
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
