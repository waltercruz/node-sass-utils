"use strict";

var nodeSass = require("node-sass");
var dartSass = require("sass");
var sassEmbedded = require("sass-embedded");

var utils = require("../lib");

var nodeSassUtils = utils(nodeSass);
var dartSassUtils = utils(dartSass);
var embeddedSassUtils = utils(sassEmbedded);
module.exports = {
  withEachSass: function (cb) {
    cb(nodeSass, "node-sass", nodeSassUtils);
    cb(dartSass, "dart-sass", dartSassUtils);
    cb(sassEmbedded, "sass-embedded", embeddedSassUtils);
  }
};
