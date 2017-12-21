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

  it ('checks if temperature can\'t be greter than max temperature', function(){
    for (i = 0; i < thermostat.maxTemp; i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual(thermostat.maxTemp);
  });

  it ('checks if temperature can\'t be lower than 10', function(){
    for (i = 0; i < 10; i++) {
      thermostat.down();
    }
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(10);
  });

  describe("PSM", function(){


    it ('on by default', function(){
      expect(thermostat.psmMode).toEqual(true)
    });

    it ('cannot exceed 32 degrees when PSM is OFF', function(){
       thermostat.psmMode = false
      for (i = 0; i < 12; i++) {
        thermostat.up();
      }
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(32)
    })
  })
});
