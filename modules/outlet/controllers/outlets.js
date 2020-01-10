/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
// const outlets = checkUser.permissions.outlets;
const { Outlet } = require('../../models/outlet');
const { restUser } = require('../../models/restUserDetails');
const { mongooseAsync } = require('../../utils');


async function getOutletInfoById(outletId) {
  const checkOutlet = await mongooseAsync.findOneDoc(
    {
      outletId,
    },
    Outlet,
    {
      outletId: 1,
      _id: 0,
      displayName: 1,
      email: 1,
      locality: 1,
      mobile: 1,
      location: 1,
      outletName: 1,
      restId: 1,
    },
    {
      lean: true,
    },

  );

  if (checkOutlet) {
    return checkOutlet;
  }
  throw new Error('OUTLETS_ERR');
}

async function getOutletDetails(payload) {
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
  if (checkUser) {
    let outlets = checkUser.permissions.outlets;
    let outletData = [];
    await Promise.all(outlets.map(async (element) => {
      console.log(element);
      let data = await getOutletInfoById(element);
      outletData.push(data);
    }));

    return Promise.resolve(global.messages.success('OUTLETS_FETCH', '', { outletData }));
  }
  throw new Error('NO_USER_REST');

}

module.exports = { getOutletDetails };