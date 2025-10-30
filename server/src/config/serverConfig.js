const express = require("express");
const path = require("path");
const morgan = require("morgan");
const corsConfig = require("./corsConfig");
const cors = require("cors");

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors(corsConfig));
};

module.exports = serverConfig;