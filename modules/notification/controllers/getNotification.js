const { userNotification, setAlarm, popUpNotification } = require('../../models/notification');

async function getUserNotification() {
  const userData = {
    data: await userNotification,
    status: 200,
  }
  return Promise.resolve(userData);
}

async function getSetAlarm() {
  const alarmData = {
    data: await setAlarm,
    status: 200,
  }
  return Promise.resolve(alarmData);
}

async function getPopNotification() {
  const popData = {
    data: await popUpNotification,
    status: 200,
  }
  return Promise.resolve(popData);
}

module.exports = { getUserNotification, getSetAlarm, getPopNotification }; 
