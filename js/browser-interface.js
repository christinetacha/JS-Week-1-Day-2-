$(document).ready(function(){
  $('#alarm').submit(function(event){
    event.preventDefault();

    var alarmTime = $('#set-alarm').val();
    console.log(alarmTime);
  });
});
