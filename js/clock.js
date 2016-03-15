
//Alarm Clock business logic

function Alarm (time, alert) {
  this.time = time;
  this.alert = false;
}

Alarm.prototype.checkAlarm = function() {
  var currentTime = moment().format("hh:mm");
  var alarmTime = this.time;
  console.log(alarmTime);
  // console.log(currentTime);
  if (currentTime === alarmTime) {
    this.alert = true;
  } else {
    this.alert = false;
  }
  // console.log(this.alert);
};

exports.Alarm = Alarm;
