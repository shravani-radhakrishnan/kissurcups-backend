function getMessage() {
    const successMessages = {
      USER_SAVED: {
        data: { message: 'Basic profile saved ', type: 'success', data: {} },
        status: 200,
      },
      USER_CREATED: {
        data: { message: 'Account Created, welcome to Stove Rove', type: 'success', data: {} },
        status: 200,
      },
      LOGIN: {
        data: { message: 'Login successful', type: 'success', data: {} },
        status: 200,
      },
    };
  
    const errorMessages = {
      UNKNOWN: {
        data: { message: 'Something happened, please contact customer care.', type: 'error' },
        status: 500,
      },
      USER_EXISTS: {
        data: { message: 'If you\'ve already signed up with any product/services of Laalsa, you can use the same user ID and password to log into Stoverove. Forgot password? Don\'t worry, you can generate a new one.', type: 'error' },
        status: 409,
      },
      USER_NOT_FOUND: {
        data: { message: 'Please sign up for a Stove Rove account', type: 'error' },
        status: 409,
      },
      AUTH_HEADER_NOT_FOUND: {
        data: { message: 'Session expired, please login to continue', type: 'error' },
        status: 401,
      },
      NO_DATA_FOUND: {
        data: { message: 'No order found for this Id', type: 'error' },
        status: 400,
      },
    };
    function error(key, extraText = '', data = {}) {
      let msg;
      let keyName = key;
      if (Object.prototype.hasOwnProperty.call(errorMessages, keyName)) {
        msg = errorMessages[keyName].data.message + extraText;
      } else {
        msg = errorMessages.UNKNOWN.data.message + extraText;
        keyName = 'UNKNOWN';
      }
      const obj = Object.assign({}, JSON.parse(JSON.stringify(errorMessages[keyName])));
      obj.data.data = data;
      obj.data.message = msg;
      return obj;
    }
    function success(key, extraText = '', data = {}) {
      let msg;
      if (Object.prototype.hasOwnProperty.call(successMessages, key)) {
        msg = successMessages[key].data.message + extraText;
      } else {
        msg = successMessages.UNKNOWN.data.message + extraText;
      }
      const obj = Object.assign({}, JSON.parse(JSON.stringify(successMessages[key])));
      obj.data.data = data;
      obj.data.message = msg;
      return obj;
    }
    return {
      error,
      success,
    };
  }
  
  module.exports = getMessage();
  