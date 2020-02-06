const { mongooseAsync } = require('../../utils');
const { outletTableDetails } = require('../../models');

async function getOutletTables(outletId) {
  console.log('====>', typeof outletId);
  const checkOutlet = await mongooseAsync.findOneDoc(
    outletId,
    outletTableDetails,
    {
      outletTableDetails,
    },
    {
      lean: true,
    },
  );
  if (checkOutlet) {
    return Promise.resolve(global.messages.success('OUTLETS_FETCH', '', checkOutlet));
  }
  throw new Error('OUTLETS_ERR');
}

module.exports = { getOutletTables };