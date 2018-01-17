const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const moment = require("moment");
const si = require("systeminformation");
const useragent = require("express-useragent");

// const helper = require('../helper.js');

router.use(bodyParser.urlencoded({ extended: true }));
const Header = require("./Header");

router.get("/", function(req, res) {
  // const systemInfo = req.useragent;
  console.log(req.headers["x-forwarded-for"]);
  let output = {};
  var ip = req.ip;
  //   req.headers["x-forwarded-for"] ||
  //   req.connection.remoteAddress ||
  //   req.socket.remoteAddress ||
  //   (req.connection.socket ? req.connection.socket.remoteAddress : null);

  output.ip = ip;
  output.language = req.headers["accept-language"].split(",")[0];
  si.osInfo(function(data) {
    output.software = `${data.platform} ${data.distro}`;

    si.cpu(function(data) {
      output.hardware = `${data.manufacturer} ${data.brand}`;

      si.networkConnections(function(data) {
        // console.log("NETWORK INTERFACES");
        // console.log(data);
        res.send(output);
      });
    });
  });
});

module.exports = router;
