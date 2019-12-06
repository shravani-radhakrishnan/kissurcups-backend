const { User } = require('../../models');
const { mongooseAsync } = require('../../utils');
const { hashData } = require('../../../utils/crypto');

async function login(loginDetails) {
  const password = await hashData(loginDetails.password);
  const checkUser = await mongooseAsync.findOneDoc(
    {
      mobile: loginDetails.mobile,
      password,
    },
    User,
    {
      userName: 1,
      mobile: 1,
      email: 1,
      _id: 0,
    },
    {
      lean: true,
    },
  );
  if (checkUser) {
    console.log(checkUser);
    return Promise.resolve(global.messages.success('LOGIN', '', checkUser));
  }
  throw new Error('USER_NOT_FOUND');
}

async function resetPassword(resetPass) {
  const ValidateUser = await mongooseAsync.findOneDoc(
    {
      mobile: resetPass.mobile,
    },
    User,
    {

    },
  );
  if (ValidateUser === null) {
    throw new Error('USER_NOT_FOUND');
  } else {
    const newPassword = await hashData(resetPass.password);
    const replace = await mongooseAsync.updateOne(
      User,
      {
        mobile: resetPass.mobile,
      },
      {
        $set: {
          password: newPassword,
        },
      }
    );
    console.log('replace', replace);
    if (replace != null || replace !== '') {
      console.log('password updates');
      if (replace.n === 0) {
        throw new Error('PSWD_NOT_UPDATED');
      } else {
        return Promise.resolve(global.messages.success('RESET_PWD', '', {}));
      }
    }
  }
}

module.exports = { login, resetPassword };