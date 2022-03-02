const express = require("express");

const userRegister = require("./UserControllers")
const userSuccess = require("./UserControllers")

const router = express.Router();

router.route("/login").post(userRegister).get(userSuccess);
router.route("/register").get(userSuccess);
router.route("/product").delete(userSuccess);

module.exports = router;