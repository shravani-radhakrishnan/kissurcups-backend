const AppName = 'KissUrCups';
const config = {
  local: {
    AppName,
    server: {
      port: 3026,
      hostname: '0.0.0.0',
    },
    app: {

    },
  },
};

function getConfig(env) {
  return config[env];
}

module.exports = getConfig;
