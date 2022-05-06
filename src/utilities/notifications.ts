import admin = require('firebase-admin');
import { Alarm } from 'src/schemas/alarm.schema';

export async function toggleAlarmNotification(alarm: Alarm, tokens) {
  try {
    const message = {
      notification: {
        title: 'Update alarm',
        body: `Your alarm ${alarm.name} has been ${
          !alarm.active ? 'activated' : 'deactivated'
        }`,
      },
      tokens,
    };
    console.log(admin);
    await admin
      .messaging()
      .sendMulticast(message)
      .then((res) => {
        console.log('Good');
        console.log(res);
      })
      .catch((err) => {
        console.log('Bad');
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}
