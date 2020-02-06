const { User } = require('./userDetails');
const { addressSchema } = require('./address');
const { outletTableDetails } = require('./outletTable');
const { restUser } = require('./restUserDetails');
const { Outlet } = require('./outlet');
const { QrMapping } = require('./QrMapping');

module.exports = { User, addressSchema, restUser, outletTableDetails, Outlet, QrMapping };
