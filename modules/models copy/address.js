const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
  addressLine: { type: String, default: '' },
  buildingName: String,
  landmark: String,
  city: String,
  state: String,
  country: String,
  pinCode: { type: String, default: '' },

}, { _id: false });

module.exports = { addressSchema };