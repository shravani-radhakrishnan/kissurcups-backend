const userNotification = {
  action: {
    send_notification: {
      heading: 'this is heading text',
      description: 'this is description text',
    },
  },
  result: "Some data in dict or list format to be saved",
  status: 'successfull',
}

const setAlarm = {
  action: {
    set_alarm: {
      time: '10:00:00',
      text: 'this is text',
    },
  },
  result: "Some data in dict or list format to be saved",
  status: 'successful',
}

const popUpNotification = {
  action: {
    pop_up_notification: {
      heading: 'this is heading text',
      description: 'this is description text',
    },
  },
  result: "Some data in dict or list format to be saved",
  status: 'successful',
}

module.exports = { userNotification, setAlarm, popUpNotification }; 
