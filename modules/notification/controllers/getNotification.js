const { userNotification, setAlarm, popUpNotification } = require('../../models/notification');
// const { mongooseAsync } = require('../../utils');

async function getUserNotification() {
  const user = await userNotification;
  console.log(user);
  const userData = {
    data: user,
    status: 200,
  }
  return Promise.resolve(userData);
}

async function getSetAlarm() {
  const alarm = await setAlarm;
  console.log(alarm);
  const alarmData = {
    data: alarm,
    status: 200,
  }
  return Promise.resolve(alarmData);
}

async function getPopNotification() {
  const pop = await popUpNotification;
  console.log(pop);
  const popData = {
    data: pop,
    status: 200,
  }
  return Promise.resolve(popData);
}

module.exports = { getUserNotification, getSetAlarm, getPopNotification }; 
