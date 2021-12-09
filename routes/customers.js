const mongoose = require("mongoose");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },

    isGold: {
      type: Boolean,
      requied: true,
    },

    phone: {
      type: String,
      minlength: 10,
      maxlength: 10,
    },
  })
);

module.exports = router;
