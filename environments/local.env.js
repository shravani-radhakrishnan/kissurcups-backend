const mongooseOptions = {
    useNewUrlParser: true,
    reconnectTries: 30,
    autoReconnect: true,
    useFindAndModify: false,
    reconnectInterval: 500,
    poolSize: 100,
    keepAlive: true,
    connectTimeoutMS: 10000,
    useCreateIndex: true,
  };
  
  const services = {
    databases: {
      kissUrCups: {
        name: 'kissUrCups',
        user: '',
        password: '',
        url: 'localhost:27017', // '159.89.164.240:27017',
        dbName: 'stoveRove',
        options: mongooseOptions,
      },
      restPanel: {
        name: 'restPanel',
        user: 'admin',
        password: 'admin123',
        url: '159.89.164.240:27017', // 159.89.164.240
        dbName: 'restaurant_panel',
        options: mongooseOptions,
      },
    },
    auth: {
      url: 'http://139.59.92.1:5000',
      login: { path: '/login', method: 'post' },
      signup: { path: '/signup', method: 'post' },
    },
    mailService: {
      url: 'https://api02.laalsa.com',
      sendMail: { path: '/lba/misc/sendMail/', method: 'post' },
    }
  };
  
  module.exports = function getConfig(serviceName) {
    return services[serviceName];
  };
  