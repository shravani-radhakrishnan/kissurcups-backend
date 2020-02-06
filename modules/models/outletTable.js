const mongoose = require('mongoose');

const { Schema } = mongoose;
const { connectedDbs } = require('../../utils/database');

const outletTableSchema = new Schema({
  outletuuid: String,
  outletId: String,
  outletName: String,
  restId: String,
  ownerId: String,
  noOfTables: Number,
  tables: Array,
  address: Object,
  location: Object,
  QrCodes: Array,

});

module.exports = { outletTableSchema, outletTableDetails: connectedDbs.restaurant.model('outletTable', outletTableSchema) };
