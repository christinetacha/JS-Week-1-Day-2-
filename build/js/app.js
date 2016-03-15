(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
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

},{"./../js/clock.js":1}]},{},[2]);
