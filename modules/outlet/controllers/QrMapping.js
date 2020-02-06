const { outletTableDetails } = require('../../models/outletTable');
const { QrMapping } = require('../../models/QrMapping');
const { mongooseAsync } = require('../../utils');

async function getAllQrCodes() {
  const outletInfo = await mongooseAsync.fetchDoc(
    {},
    outletTableDetails,
    {
      _id: 0,
      outletId: 1,
      outletName: 1,
      location: 1,
      tables: 1,
    },
    {
      lean: true,
    },
  );
  console.log('outletInfo', outletInfo);
  if (!outletInfo) {
    throw new Error('NO_OUTLETS');
  } else {
    await Promise.all(outletInfo.map(async (data, onum) => {
      let outletTables = [];
      const outletObj = {
        outletId: data.outletId,
        outletName: data.outletName,
        location: data.location,
      };
      let tablesObj = {};
      await data.tables.map(async (table, tnum) => {
        tablesObj = { ...outletObj, ...table };
        // outletTables.push(tablesObj);
        const checkQrCode = await mongooseAsync.findOneDoc(table.QrCode, QrMapping, QrMapping);
        console.log(checkQrCode);
        if (!checkQrCode) {
          throw new Error('NO_OUTLETS');
        } else {
          const result = mongooseAsync.saveDoc(new QrMapping(tablesObj));
          console.log('result -->', onum, tnum, result);
        }
      });

      // console.log('All-->', onum, tnum, outletTables);
    }));
    return Promise.resolve(global.messages.success('OUTLET_TABLES_CREATED', '', {}));
  }
}
module.exports = { getAllQrCodes };
