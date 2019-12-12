/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
const uuid = require('uuid/v1');
const shortid = require('shortid');
const { restUser } = require('../../models/restUserDetails');
const { outletTableDetails } = require('../../models/outletTable');
const { Outlet } = require('../../models');
const { mongooseAsync } = require('../../utils');

async function getOutletInfo(outletId, tableDetails, outlet_uuid) {
  console.log('tableDetails in getOutletInfo', outletId, tableDetails, outlet_uuid);
  const outletDetails = await mongooseAsync.findOneDoc(
    {
      outletId,
    },
    Outlet,
    {
      _id: 0,
      outletId: 1,
      location: 1,
      outletName: 1,
      restId: 1,
      address: 1,
      ownerId: 1,
      // outlet,
    },
  );
  console.log('outlet details --->', outletDetails);
  if (outletDetails === null || outletDetails === '') {
    throw new Error('OUTLETS_ERR');
  } else {
    const checkOutlet = await mongooseAsync.findOneDoc(
      {
        outletId,
      },
      outletTableDetails,
      {
        outletId: 1,
        _id: 0,
      },
    );
    console.log('checkOutlet--->', checkOutlet);
    if (checkOutlet !== null) {
      console.log('false case', checkOutlet != null, checkOutlet !== '');
      throw new Error('ALREADY_OUTLET_TABLES_CREATED');
    } else if (checkOutlet === null) {
      console.log('true case', checkOutlet === null);
      const savedOutlet = await mongooseAsync.saveDoc(new outletTableDetails(
        {
          outletuuid: outlet_uuid,
          outletId,
          outletName: outletDetails.outletName,
          restId: outletDetails.restId,
          ownerId: outletDetails.ownerId,
          noOfTables: 4,
          tables: tableDetails,
          address: outletDetails.address,
          location: outletDetails.location,
        },
      ));
      console.log('saved data--->', savedOutlet);
      return savedOutlet;
    }
    // return Promise.resolve(outletDetails);
  }
}


async function outletQRCode(payload) {
  let data;
  const checkUser = await mongooseAsync.findOneDoc(
    {
      mobile: payload.mobile,
    },
    restUser,
    {
      restUser,
    },
    {
      lean: true,
    },
  );
  console.log('checkuser--->', checkUser);
  if (checkUser) {
    if (checkUser === null || checkUser === '') {
      throw new Error('NO_USER_REST');
    } else {
      const outlets = checkUser.permissions.outlets;
      console.log('outlets-->', outlets);
      let tableCount = 4;
      let outletId = '';
      await Promise.all(outlets.map(async (outletData) => {
        let tableDetails = [];
        let outlet_uuid = uuid();
        console.log('outletId', outletData);
        console.log('uuid generator', outlet_uuid);
        for (let j = 0; j <= tableCount; j += 1) {
          // let tblNo = 'T' + j;
          let tableObj = {
            tableNo: 'T' + j,
            tableuuid: uuid(),
            QrCode: shortid.generate(),
          };
          tableDetails.push(tableObj);
        }
        data = await getOutletInfo(outletData, tableDetails, outlet_uuid);
        // console.log('tableDetails Array and outletId --->', tableDetails, outletId);
      }));
      console.log('after completion outlet ids--->', data);
      return Promise.resolve(global.messages.success('OUTLET_TABLES_CREATED', '', { data }));
    }
  }
  throw new Error('USER_NOT_FOUND');
}

module.exports = { outletQRCode };
