var Alarm = require("./../js/clock.js").Alarm;

$(document).ready(function(){
  $("#alarm-alert").hide();
  $('#alarm').submit(function(event){
    event.preventDefault();

    var alarmTime = $('#set-alarm').val();
    var newAlarm = new Alarm(alarmTime, false);
    console.log(newAlarm);
    console.log(newAlarm.time);

    // var autoCheck;
    currentlyChecking(newAlarm);
  });
});

var currentlyChecking = function(newAlarm) {
  // var autoCheck = setInterval(newAlarm.checkAlarm, 1000);
  newAlarm.alert = setInterval(newAlarm.checkAlarm, 1000);
  if (newAlarm.alert === true) {
    alert("Ayyyyyyyyy");
  } else {
    console.log("oh noooooo");
  }
}






// $("#check").click(function() {
//   var whatUp = newAlarm.checkAlarm();
//   if (whatUp === true) {
//     alert("Ayyyyyyyyy");
//   } else {
//     console.log("oh noooooo");
//   }
// });

// var autoCheck = window.setInterval(newAlarm.checkAlarm(), 500);


// setinterval practice

// setInterval(function(){ console.log("Hello"); }, 3000);
//
// var myVar;
//
// function alertFunc() {
//     console.log("Hello!");
// }
//
// function myFunction() {
//   myVar = setInterval(alertFunc, 3000);
// }
//
// myFunction();

$(document).ready(function(){
  $(".current-time").text(moment());
});
