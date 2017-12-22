$(document).ready(function(){
  var thermostat = new Thermostat();
$('#temperature').text(thermostat.currentTemp());

  function updateTemp() {
    $('#temperature').text(thermostat.temp);
  }

  $('#temp-up').on('click', function() {
    thermostat.up();
    updateTemp();
  })

  $('#temp-down').click(function(){
    thermostat.down();
    updateTemp();
  })

  $('#temp-reset').click(function(){
    thermostat.resetTemp();
    updateTemp();
  })

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    updateTemp();
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
  })
})
