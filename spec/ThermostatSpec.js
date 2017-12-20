describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('has a default of 20 celcuis', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it ('can increase the temperature by 1', function(){
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it ('can decrease the temperature by 1', function(){
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(19);
  });

});
