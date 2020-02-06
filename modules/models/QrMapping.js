const mongoose = require('mongoose');

const { Schema } = mongoose;
const { connectedDbs } = require('../../utils/database');

const QrMappingSchema = new Schema({
  outletId: String,
  outletName: String,
  location: String,
  tableNo: String,
  tableuuid: String,
  QrCode: String,
  QrLink: String,
  gpsRadius: Number,
});
// Schema name ,Name used in index :connection.dbname.model(collectionname,schemaname);
module.exports = { QrMappingSchema, QrMapping: connectedDbs.restaurant.model('QrMapping', QrMappingSchema) }