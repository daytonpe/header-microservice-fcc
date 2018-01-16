var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var moment = require("moment");
var si = require("systeminformation");
// var helper = require('../helper.js');

router.use(bodyParser.urlencoded({ extended: true }));
var Header = require("./Header");

router.get("/", function(req, res) {
  var output = {};
  si.osInfo(function(data) {
    console.log("OS INFO");
    console.log(data);
    output.software = `${data.platform} ${data.distro}`;

    si.cpu(function(data) {
      console.log("CPU");
      console.log(data);
      output.hardware = `${data.manufacturer} ${data.brand}`;
      res.send(output);
    });

    // res.send(output);
  });
});

module.exports = router;
