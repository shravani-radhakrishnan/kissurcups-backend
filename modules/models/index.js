const { User } = require('./userDetails');
const { addressSchema } = require('./address');
const { outletTableDetails } = require('./outletTable');
const { restUser } = require('./restUserDetails');
const { Outlet } = require('./outlet');
const { QrMapping } = require('./QrMapping');
const { userNotification, setAlarm, popUpNotification } = require('./notification');

module.exports = { User, addressSchema, restUser, outletTableDetails, Outlet, QrMapping, userNotification, setAlarm, popUpNotification };
