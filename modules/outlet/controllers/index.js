const { outletQRCode } = require('./ouletQRCodeGeneration');
const { getOutletDetails } = require('./getoutletDetails');
const { getOutletTables } = require('./getOutletTablesInfo');
const { getAllQrCodes } = require('./QrMapping')

module.exports = { outletQRCode, getOutletDetails, getOutletTables, getAllQrCodes };
