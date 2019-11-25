const request = require('request');

module.exports = function handleServiceCall(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, httpResp, body) => {
      if (err) {
        console.log('errr');
        // eslint-disable-next-line no-undef
        logger.error(err);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ message: 'UNKNOWN' });
      } else {
        console.log('responce from service');
        // console.log(body);
        // resolve({});
        // console.log(httpResp.statusCode);
        // body = JSON.parse(body);
        if (httpResp.statusCode === 200) {
          resolve(body);
        } else {
          reject(Object.assign(body, { action: 'processed', status: httpResp.statusCode }));
        }
      }
    });
  });
};
