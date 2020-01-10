const uuid = require('uuid/v1');
const { User, AppUser } = require('../../models');
const { mongooseAsync } = require('../../utils');
const { hashData } = require('../../../utils/crypto');

async function signUp(userDetails) {
  console.log(userDetails);
  const query = {
    mobile: userDetails.mobile,
  };
  const model = (userDetails.userType === 'admin' ? User : AppUser);
  const newUserCheck = await mongooseAsync.findOneDoc(
    query,
    model,
  );
  if (newUserCheck) {
    logger.info(`exisiting user ${userDetails.mobile}`);
    throw new Error('USER_EXISTS');
  } else {
    logger.info(`new user ${userDetails.mobile}`);
    // saving document in db
    const saveObj = {
      mobile: userDetails.mobile,
      userName: userDetails.userName,
      userId: uuid(),
      email: userDetails.email,
      password: await hashData(userDetails.password),
      deviceId: userDetails.deviceId,
      app: userDetails.app,
      appVersion: userDetails.appVersion,
      gcmId: userDetails.gcmId,
      gcmToken: userDetails.gcmToken,
    };
    if (userDetails.userType === 'admin') {
      await mongooseAsync.saveDoc(new User(saveObj));
      return Promise.resolve(global.messages.success('USER_CREATED', '', {}));
    }
    if (userDetails.userType === 'appUser') {
      await mongooseAsync.saveDoc(new AppUser(saveObj));
      return Promise.resolve(global.messages.success('USER_CREATED', '', {}));
    }
  }
}
module.exports = { signUp };