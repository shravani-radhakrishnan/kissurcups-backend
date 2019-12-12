const mongoose = require('mongoose');

const { Schema } = mongoose;
const { connectedDbs } = require('../../utils/database');
const { addressSchema } = require('../models/address');
const { bankDetailsSchema } = require('../models/bankDetails');

const restaurantSchema = new Schema({
  restId: String,
  restName: String,
  ownerName: String,
  restEmail: String,
  address: addressSchema,
  numberOfOutlets: String,
  gstin: String,
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted', 'suspended'],
  },
  ownerId: String,
  imageUrl: {
    type: String,
    default: '',
  },
  bankDetails: { type: bankDetailsSchema, default: {} }, 
});

module.exports = connectedDbs.localDb.model('restaurant', restaurantSchema);
