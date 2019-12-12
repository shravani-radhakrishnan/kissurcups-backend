const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
  addressLine: { type: String, default: '' },
  buildingName: { type: String, default: '' },
  landmark: { type: String, default: '' },
  city: String,
  state: String,
  country: { type: String, default: '' },
  pinCode: { type: String, default: '' },

}, { _id: false });

module.exports = { addressSchema };
