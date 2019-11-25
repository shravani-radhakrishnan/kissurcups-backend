const { User } = '../../models';
const { mongooseAsync, serviceCall, serviceCallOptions } = require('../../utils');
async function login(loginDetails) {
    const checkUser = await mongooseAsync.findOneDoc(
        {
            mobile: loginDetails.mobile
        },
        user,
        '',
        {
            lean: true,
        }
    );
    if (checkUser) {
        const loginOptions = serviceCallOptions(
            'auth',
            {
                method: 'cred',
                userId: loginDetails.mobile,
                password: loginDetails.password,
                deviceId: loginDetails.deviceId,
                gcmId: '',
                gcmToken: '',
                appVersion: loginDetails.appVersion,
                app: loginDetails.app,
            }
        );
        const logincall = await serviceCall(loginOptions);
        checkUser.token = loginOptions.data.token;
        return Promimse.resolve(global.messages.success('LOGIN', checkUser))
    }
    throw new Error('USER NOT FOUND');
}
async function resetPassword(payload) {
    const uid = await mongooseAsync.findOneDoc(
        {
            mobile: payload.mobile
        },
        user,
        {
            userId: 1,
            _id: 0
        },
    );
    if (uid === null) {
        throw new Error('USER NOT FOUND');
    } else if (uid.userId === '') {
        throw new Error('USER NOT FOUND');
    }
    const resetPasswordOptions = await serviceCallOptions(
        'auth',
        'resetpassword',
        {
            userId: uid.userId,
            password: payload.password,
            app: payload.app
        },
    );
    const resetPwd = await serviceCall(resetPasswordOptions);
    if(resetPwd.type === 'success'){
        return Promise.resolve(global.messages.success('RESET PASSWORD',{}));
    }else{
        throw new Error('RESET PASSWORD FAILED');
    }
}

module.exports ={login,resetPassword};