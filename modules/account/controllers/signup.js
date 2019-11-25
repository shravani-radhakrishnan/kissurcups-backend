const { user } = ('../../models');
const { serviceCallOptions, serviceCall, mongooseAsync, mailService, appData } = ('../../utils');
// const msg = require('../../../utils/otpService');
// const registeredMail = require('../../../source/welcomeMail');
async function signUp(userDetails) {
    const newUserCheck = await mongooseAsync.findOneDoc(
        {
            mobile: userDetails.mobile
        },
        user
    );
    if ((newUserCheck) !== null && (newUserCheck.registerStatus !== 'initiated')) {
        logger.info(`exisiting user ${userDetails.mobile}`);
        throw new Error('USER EXISTS');
    } else if ((newUserCheck) !== null && (newUserCheck.registerStatus) === 'initiated') {
        logger.info(`initiated user ${userDetails.mobile}`);
        const authOptions = serviceCallOptions(
            'auth',
            'initiateSignup',
            {
                userId: userDetails.mobile,
                userName: userDetails.userName,
                email: userDetails.email,
                deviceId: userDetails.deviceId,
                app: userDetails.app,
                appVersion: userDetails.appVersion,
                gcmId: '',
                gcmToken: '',
            },
        );
        const authReq = await serviceCall(authOptions);
        await mongooseAsync.updateOne(
            user,
            { mobile: userDetails.mobile },
            {
                userId: authReq.data.userId,
                name: userDetails.userName
            },
        );
        // const otpOptions = await serviceCall(
        //     'messaging',
        //     'sendOtp',
        //     {
        //         mobile: `${userDetails.countryCode}${userDetails.mobile}`,
        //         appName: userDetails.app
        //     }
        // );
        // const sendOtp = await serviceCall(otpOptions);
        // logger.info(`otp send to mobile ${userDetails.mobile} with status ${sendOtp}`);
        // return Promise.resolve(global.messages.success('OTP SENT', `${userDetails.mobile}`, {}));
    } else {
        logger.info(`new user ${userDetails.mobile}`);
        const authOptions = serviceCallOptions(
            'auth',
            'initiateSignup',
            {
                userId: userDetails.mobile,
                userName: userDetails.userName,
                email: userDetails.email,
                deviceId: userDetails.deviceId,
                app: userDetails.app,
                appVersion: userDetails.appVersion,
                gcmId: userDetails.gcmId ? userDetails.gcmId : '',
                gcmToken: userDetails.gcmToken ? userDetails.gcmToken : '',
            },
        );
        const authReq = await serviceCall(authOptions);
        // saving document in db
        await mongooseAsync.saveDoc(new user(
            {
                userId: authReq.data.userId,
                name: userDetails.userName,
                mobile: userDetails.mobile,
                email: userDetails.email
            }
        ));
        // send otp
        // const otpOptions = await serviceCall(
        //     'messaging',
        //     'sendOtp',
        //     {
        //         mobile: `${userDetails.countryCode}${userDetails.mobile}`,
        //         appName: userDetails.app
        //     }
        // );
        // const sendOTP = await serviceCall(otpOptions);
        // logger.info(`otp sent to mobile ${userDetails.mobile} with status ${sendOTP}`);
        // return Promise.resolve(global.messages.success('OTP_SENT', `${userDetails.mobile}`, {}));
    }
}
module.exports ={signUp}