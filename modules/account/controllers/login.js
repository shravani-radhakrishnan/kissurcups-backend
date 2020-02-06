
const { User } = require('../../models/userDetails');
const { restUser } = require('../../models/restUserDetails');
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
      // userName: 1,
      // mobile: 1,
      // email: 1,
      _id: 0,
    },
    {
      lean: true,
    },
  );
  let dataToSend;
  if (checkUser) {
    console.log('user ====in appLogin', checkUser);
    if (loginDetails.userType === 'appUser') {
      console.log('usertype -->appuser', loginDetails.userType);
      // return Promise.resolve(global.messages.success('LOGIN', '', checkUser));
      dataToSend = checkUser;
    } else if (loginDetails.userType === 'admin') {
      console.log('usertype -->admin', loginDetails.userType);
      const checkRestUser = await mongooseAsync.findOneDoc(
        {
          mobile: checkUser.mobile,
        },
        restUser,
        {
          restUser,
        },
      );
      console.log('checkrestuser', checkRestUser);
      if (checkRestUser) {
        // return Promise.resolve(global.messages.success('LOGIN', '', checkRestUser));
        dataToSend = checkRestUser;
      } else {
        throw new Error('NO_USER_REST');
      }
    }
    return Promise.resolve(global.messages.success('LOGIN', '', dataToSend));
  }
  throw new Error('CHECK_CREDENTIALS');
}

async function resetPassword(resetPass) {
  const query = {
    mobile: resetPass.mobile,
  };
  // const model = resetPass.userType === 'admin' ? User : AppUser;
  const ValidateUser = await mongooseAsync.findOneDoc(
    query,
    User,
  );
  if (ValidateUser) {
    const newPassword = await hashData(resetPass.password);
    const replace = await mongooseAsync.updateOne(
      User,
      query,
      {
        $set: {
          password: newPassword,
        },
      },
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
  } else {
    throw new Error('USER_NOT_FOUND');
  }
}

module.exports = { login, resetPassword };
