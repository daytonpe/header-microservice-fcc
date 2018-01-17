const express = require("express");
const app = express();
const useragent = require("express-useragent");

const UserController = require("./header/HeaderController");
app.use("/", UserController);
app.use(useragent.express());

module.exports = app;
