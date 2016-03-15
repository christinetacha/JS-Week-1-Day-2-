(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
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
  });
});

$(document).ready(function(){
  $(".current-time").text(moment());
});

},{"./../js/clock.js":1}]},{},[2]);
