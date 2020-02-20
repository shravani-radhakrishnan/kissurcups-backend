const userNotification = {
  action: {
    send_notification: {
      heading: 'this is heading text',
      description: 'this is description text',
    },
  },
  result: 'success',
  status: 1,
}

const setAlarm = {
  action: {
    set_alarm: {
      time: '10:00:00',
      text: 'this is text',
    },
  },
  result: 'success',
  status: 1,
}

const popUpNotification = {
  action: {
    pop_up_notification: {
      heading: 'this is heading text',
      description: 'this is description text',
    },
  },
  result: 'success',
  status: 1,
}

module.exports = { userNotification, setAlarm, popUpNotification }; 
