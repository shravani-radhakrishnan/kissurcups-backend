const mongoose = require('mongoose');

const { Schema } = mongoose;
const { connectedDbs } = require('../../utils/database');

const bankDetailsSchema = new Schema({
  bankName: {
    type: String,
    default: '',
  },
  ifscCode: {
    type: String,
    default: '',
  },
  accountNumber: {
    type: String,
    default: '',
  },
  holderName: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['complete', 'incomplete'],
    default: 'incomplete',
  },
}, { _id: false });

module.exports = { bankDetailsSchema, BankDetails: connectedDbs.localDb.model('bankDetails', bankDetailsSchema)};
