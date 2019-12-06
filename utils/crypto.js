const crypt = require('crypto');
const logger = require('./logger');

function hashData(data) {
  try {
    const hash = crypt.createHash('sha256')
    hash.update(data);
    return hash.digest('hex');
  } catch (err) {
    logger.error(err.stack);
    throw new Error('HASH_CREATION_FAILED');
  }
}
module.exports = { hashData };