// 'use strict';

describe("Thermostat", function(){
  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it ('has a default of 20 celcuis', function(){
    expect(thermostat.temperature).toEqual(20);
  })

});
