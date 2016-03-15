var Alarm = require("./../js/clock.js").Alarm;

$(document).ready(function(){
  $("#alarm-alert").hide();
  $('#alarm').submit(function(event){
    event.preventDefault();

    var alarmTime = $('#set-alarm').val();
    console.log(alarmTime);
    var newAlarm = new Alarm(alarmTime);
    console.log(newAlarm);
    $("#check").click(function() {
      var whatUp = newAlarm.checkAlarm();
      if (whatUp === true) {
        alert("Ayyyyyyyyy");
      } else {
        console.log("oh noooooo");
      }
    });
    var autoCheck = window.setInterval(newAlarm.checkAlarm(), 500);
    console.log(autoCheck);
  });
});

$(document).ready(function(){
  $(".current-time").text(moment());
});
