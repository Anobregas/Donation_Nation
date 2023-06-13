const { Schema, model } = require('mongoose');
const charitySchema = new Schema({
  charityName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  stripeLink: {
    type: String,
    required: true
  }
});
const Charity = model('charity', charitySchema);
module.exports = Charity;