
//Alarm Clock business logic

function Alarm (time) {
  this.time = time;
}

Alarm.prototype.checkAlarm = function() {
  var currentTime = moment().format("hh:mm");
  var alarmTime = this.time;

  if (currentTime === alarmTime) {
    console.log(currentTime);
    console.log(alarmTime);
    return true;
  } else {
    console.log(currentTime);
    console.log(alarmTime);
    return false;
  }
};

exports.Alarm = Alarm;
