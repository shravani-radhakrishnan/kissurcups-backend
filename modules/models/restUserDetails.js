const mongoose = require('mongoose');

const { Schema } = mongoose;
const { connectedDbs } = require('../../utils/database');

const restUserSchema = new Schema({
  ownerId: String,
  userId: String,
  userName: String,
  email: String,
  mobile: String,
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted', 'suspended'],
  },
  role: String,
  creationDate: Date,
});
const restUser = connectedDbs.restaurant.model('User', restUserSchema);
module.exports = { restUser };
