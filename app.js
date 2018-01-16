var express = require("express");
var app = express();

var UserController = require("./header/HeaderController");
app.use("/", UserController);

module.exports = app;
