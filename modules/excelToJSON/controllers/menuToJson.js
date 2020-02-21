const fs = require('fs');
const extractMenu = require('../utils/extractMenu');

async function convertToJson(payload) {
  // console.log(payload);
  const menuExtract = await extractMenu(payload.fileBuff);
  console.log(menuExtract);
  return Promise.resolve(global.messages.success('LOGIN', '', {}));
}

module.exports = { convertToJson };
