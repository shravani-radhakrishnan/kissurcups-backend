const { MongoClient } = require('mongodb');

const databases = global.services('databases');

const options = {
  useUnifiedTopology: true,
  native_parser: true,
  useNewUrlParser: true,
};


function connectdb(reqDb) {
  return new Promise((resolve, reject) => {
    const dbOptions = databases[reqDb];
    MongoClient.connect(`mongodb://${dbOptions.url}`, options, (err, client) => {
      if (err) {
        // eslint-disable-next-line no-undef
        logger.error(err);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ message: 'UNKNOWN' });
      } else {
        console.log('mongo client connected');
        resolve(client);
      }
    });
  });
}

module.exports = connectdb;
