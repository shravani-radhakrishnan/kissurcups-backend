const mongoose = require('mongoose');
const { connectedDbs } = require('../../utils/database');

const { Schema } = mongoose;

const userSchema = new Schema({
  mobile: String,
  userName: String,
  email: String,
  deviceId: String,
  password: String,
  app: String,
  appVersion: String,
  gcmId: String,
  gcmToken: String,
});
const User = connectedDbs.localDb.model('User', userSchema);
module.exports = { User };