"use strict";

const mongoose = require("mongoose");
const devoteesSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    name: {
      type: String,
    },

    marital_status: {
      type: String,
    },
    address: {
      type: String,
    },
    occupation: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
devoteesSchema.set("toJSON", {
  getters: true,
  virtuals: false,
  transform: (doc, ret, options) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Devotees", devoteesSchema);
