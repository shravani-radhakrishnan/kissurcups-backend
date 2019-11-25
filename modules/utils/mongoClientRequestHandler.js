const MongoClientConnect = require('./mongoClient');

function findOne(dbName, collectionName, searchParams, specificParams = {}) {
  return new Promise((resolve, reject) => {
    MongoClientConnect(dbName).then((client) => {
      const db = client.db(dbName);
      db.collection(collectionName).findOne(...searchParams, { projection: specificParams }, (err, result) => {
        if (err) {
          // eslint-disable-next-line no-undef
          logger.error(err);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: 'UNKNOWN' });
        } else {
          resolve(result);
        }
        client.close();
      });
    }).catch((err) => {
      reject(err);
    });
  });
}

function find(dbName, collectionName, searchParams, specificParams = {}) {
  return new Promise((resolve, reject) => {
    MongoClientConnect(dbName).then((client) => {
      const db = client.db(dbName);
      db.collection(collectionName).find(...searchParams, { projection: specificParams }).toArray((err, result) => {
        if (err) {
          logger.error(err);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: 'UNKNOWN' });
        } else {
          resolve(result);
        }
        client.close();
      });
    }).catch((err) => {
      reject(err);
    });
  });
}

function saveDoc(dbName, collectionName, saveParams) {
  return new Promise((resolve, reject) => {
    MongoClientConnect(dbName).then((client) => {
      const db = client.db(dbName);
      db.collection(collectionName).insertOne(...saveParams, (err, result) => {
        if (err) {
          logger.error(err);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: 'UNKNOWN' });
        } else {
          resolve(result);
        }
        client.close();
      });
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateOne(dbName, collectionName, saveParams) {
  return new Promise((resolve, reject) => {
    MongoClientConnect(dbName).then((client) => {
      const db = client.db(dbName);
      db.collection(collectionName).updateOne(...saveParams, (err, result) => {
        if (err) {
          // eslint-disable-next-line no-undef
          logger.error(err);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: 'UNKNOWN' });
        } else {
          resolve(result);
        }
        client.close();
      });
    }).catch((err) => {
      reject(err);
    });
  });
}


module.exports = {
  findOne, find, saveDoc, updateOne,
};
