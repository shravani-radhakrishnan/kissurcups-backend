const mongoose = require('mongoose');

const { Schema } = mongoose;
const { connectedDbs } = require('../../utils/database');
const { addressSchema } = require('../models/address');
// const { bankDetailsSchema } = require('../models/bankDetails');

const restaurantSchema = new Schema({
  restId: String,
  restName: String,
  ownerId: String,
  restEmail: String,
  address: addressSchema,
  numberOfOutlets: String,
  gstin: String,
  // status: {
  //   type: String,
  //   enum: ['active', 'inactive', 'deleted', 'suspended'],
  // },
  imageUrl: {
    type: String,
    default: '',
  },
  creationDate: Date,
  // bankDetails: { type: bankDetailsSchema, default: {} }
});
module.exports = { restaurantSchema, RestaurantDetails: connectedDbs.restaurant.model('restaurant', restaurantSchema) };
