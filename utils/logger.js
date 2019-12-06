const winston = require('winston');
require('winston-daily-rotate-file');

global.logger = winston.createLogger({
  levels: {
    error: 0,
    info: 1,
  },
  format: winston.format.json(),
  transports: [
    new (winston.transports.Console)({
      colorize: true,
    }),
    new (winston.transports.DailyRotateFile)({
      dirname: './logs',
      filename: '%DATE%-INFO.log',
      datePattern: 'YYYY-MM-DD',
      prepend: true,
      level: 'info',
      createTree: true,
      json: false,
      zippedArchive: true,
    }),
    new (winston.transports.DailyRotateFile)({
      dirname: './logs',
      filename: '%DATE%-ERROR.log',
      datePattern: 'YYYY-MM-DD',
      prepend: true,
      level: 'error',
      createTree: true,
      json: false,
      zippedArchive: true,
    }),
  ],
});
