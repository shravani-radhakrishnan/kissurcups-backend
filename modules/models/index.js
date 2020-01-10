const { User, AppUser } = require('./userDetails');
const { addressSchema } = require('./address');
const { outletTableDetails } = require('./outletTable');
const { restUser } = require('./restUserDetails');
const { Outlet } = require('./outlet');

module.exports = { User, addressSchema, restUser, outletTableDetails, Outlet, AppUser };
