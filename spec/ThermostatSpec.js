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

  it ('checks if minimum temperature is 10 celcius', function(){
    for (i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(thermostat.minimumTemp);
  });

  it ('checks if temperature can\'t be lower than 10', function(){
    for (i = 0; i < 10; i++) {
      thermostat.down();
    }
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(10);
  });



  // it ('PSM is on by default', function(){
  //   expect(thermostat.)
  // });
});
