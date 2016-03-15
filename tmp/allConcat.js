var Alarm = require("./../js/clock.js").Alarm;

$(document).ready(function(){
  $('#alarm').submit(function(event){
    event.preventDefault();

    var alarmTime = $('#set-alarm').val();
    console.log(alarmTime);
    var newAlarm = new Alarm(alarmTime);
    console.log(newAlarm);
  });
  $("#alarm-alert").hide();
});

$(document).ready(function(){
  $(".current-time").text(moment());
});
