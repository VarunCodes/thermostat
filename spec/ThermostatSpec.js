// 'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it ('has a default of 20 celcuis', function(){
    expect(thermostat.temperature).toEqual(20);
  })

  it ('can increase the temperature by 1', function(){
    thermostat.temperatureUp();
    expect(thermostat.getCurrentTemperature).toEqual(21);
  })

  it ('can decrease the temperature by 1', function(){
    thermostat.temperatureDown();
    expect(thermostat.temperature).toEqual(19);
  })

});
