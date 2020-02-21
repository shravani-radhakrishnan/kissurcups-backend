function getMessage() {
  const successMessages = {
    USER_SAVED: {
      data: { message: ' profile saved ', type: 'success', data: {} },
      status: 200,
    },
    USER_CREATED: {
      data: { message: 'Account Created, welcome to KissurCups', type: 'success', data: {} },
      status: 200,
    },
    LOGIN: {
      data: { message: 'Login successful', type: 'success', data: {} },
      status: 200,
    },
    RESET_PWD: {
      data: { message: 'Password changed! Please login to continue', type: 'success', data: {} },
      status: 200,
    },
    OUTLETS_SAVED: {
      data: { message: 'Outlets are saved with QR Codes', type: 'success', data: {} },
      status: 200,
    },
    OUTLET_TABLES_CREATED: {
      data: { message: 'Outlet Tables created successfully', type: 'success', data: {} },
      status: 200,
    },
    OUTLETS_FETCH: {
      data: { message: ' Outlets feteched successfully ', type: 'success', data: {} },
      status: 200,
    },
    MAPPING_DONE: {
      data: { message: 'Qr mapping completed ', type: 'success', data: {} },
      status: 200,
    },
    MAIL_SEND: {
      data: { message: 'Mail send successfully', type: 'success', data: {} },
      status: 200,
    },
    NOTIFICATION: {
      data: { message: 'Some data in dict or list format to be saved', data: {} },
      status: 200,
    },
    SUCCESS: {
      data: { message: 'success', data: {} },
      status: 200,
    },
  };

  const errorMessages = {
    UNKNOWN: {
      data: { message: 'Something happened, please contact customer care.', type: 'error' },
      status: 500,
    },
    CHECK_CREDENTIALS: {
      data: { message: 'Please Enter correct userId and password', type: 'error' },
      status: 500,
    },
    USER_EXISTS: {
      data: { message: 'If you\'ve already signed up with any product , you can use the same user ID and password to log into Kissurcups.', type: 'error' },
      status: 409,
    },
    USER_NOT_FOUND: {
      data: { message: 'Please sign up for a KissUrCups account', type: 'error' },
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
    RESET_PWD_FAILED: {
      data: { message: 'Password reset failed, please try after sometime', type: 'error' },
      status: 400,
    },
    HASH_CREATION_FAILED: {
      data: { message: 'Hash code creation failed,please try after sometime', type: 'error' },
      status: 400,
    },
    PSWD_NOT_UPDATED: {
      data: { message: 'Password not updated please update after sometime', type: 'error' },
      status: 400,
    },
    NO_USER_REST: {
      data: { message: 'No restaurant is created with this mobile number', type: 'error' },
      status: 400,
    },
    OUTLETS_ERR: {
      data: { message: 'outlet fetching error', type: 'error' },
      status: 400,
    },
    ALREADY_OUTLET_TABLES_CREATED: {
      data: { message: 'Outlet already created ', type: 'error' },
      status: 400,
    },
    NO_OUTLETS: {
      data: { message: 'No outlets Available', type: 'error' },
      status: 400,
    },
    MAIL_ERROR: {
      data: { message: 'Mail doesn\'t sent because of some technical issue' },
      status: 400,
    },
    EXTRACT_FAILED: {
      data: { message: 'Menu creation failed, please try again. ', type: 'error' },
      status: 400,
    },
    POINT_ERROR: {
      data: { message: '', type: 'error' },
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
