const mongoose = require('mongoose');

const connectedDbs = {};

function registerCloseEvents(conn) {
  process.on('SIGINT', () => {
    conn.close(() => {
      console.log('Mongoose default connection is disconnected due to application termination');
      process.exit(0);
    });
  });
}

async function connect() {
  return new Promise(async (resolve, reject) => {
    console.log('checking db connection');
    let conn;
    try {
      console.log("--->",this.url,this.dbName);
      conn = await mongoose.createConnection(`mongodb://${this.url}/${this.dbName}?authSource=admin`, this.options);
    } catch (err) {
      reject(err);
    }
    registerCloseEvents(conn);
    connectedDbs[this.name] = conn;
    console.log(`db connected : ${this.name}`);
    resolve();
  });
}

class Database {
  constructor(configs) {
    return new Promise(async (resolve, reject) => {
      const dbs = Object.keys(configs);
      for (let i = 0; i < dbs.length; i += 1) {
        const config = configs[dbs[i]];
        try {
          // eslint-disable-next-line no-await-in-loop
          await connect.call(config);
        } catch (err) {
          reject(err);
        }
      }
      console.log(Object.keys(connectedDbs));
      resolve('done');
    });
  }
}

module.exports = { Database, connectedDbs };
