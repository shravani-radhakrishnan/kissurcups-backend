const { User } = require('../../models');
const { mongooseAsync } = require('../../utils');
const { hashData } = require('../../../utils/crypto');

async function signUp(userDetails) {
  console.log(userDetails);
  const newUserCheck = await mongooseAsync.findOneDoc({ mobile: userDetails.mobile }, User);
  if ((newUserCheck) !== null) {
    logger.info(`exisiting user ${userDetails.mobile}`);
    throw new Error('USER_EXISTS');
  } else {
    logger.info(`new user ${userDetails.mobile}`);
    // saving document in db
    await mongooseAsync.saveDoc(new User(
      {
        mobile: userDetails.mobile,
        userName: userDetails.userName,
        email: userDetails.email,
        password: await hashData(userDetails.password),
        deviceId: userDetails.deviceId,
        app: userDetails.app,
        appVersion: userDetails.appVersion,
        gcmId: userDetails.gcmId,
        gcmToken: userDetails.gcmToken,
      },
    ));
    return Promise.resolve(global.messages.success('USER_CREATED', '', {}));
  }
}
module.exports = { signUp };