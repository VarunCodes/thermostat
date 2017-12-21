describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('default of 20 celcuis', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it ('up() increases the temperature by 1', function(){
    // console.log(thermostat.isPowerSavingModeOn())
    console.log(thermostat);

    thermostat.up();
    console.log(thermostat.currentTemp());
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it ('down() decreases the temperature by 1', function(){
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  // it ('checks if temperature can\'t be greter than max temperature', function(){
  //   for (i = 0; i < thermostat.maxTemp; i++) {
  //     thermostat.up();
  //   }
  //   thermostat.up();
  //   expect(thermostat.currentTemp()).toEqual(thermostat.maxTemp);
  // });

  it ('checks if temperature can\'t be lower than 10', function(){
    for (i = 0; i < 10; i++) {
      thermostat.down();
    }
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('can be reset to default temperature', function(){
    for (i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemp();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  describe("PSM", function(){


    it ('on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
    });

    it ('can be switched off', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it ('can be toggled on and off', function(){
      console.log(thermostat)
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })

    // it ('cannot exceed 32 degrees when PSM is OFF', function(){
    //    thermostat.psmMode = false
    //   for (i = 0; i < 12; i++) {
    //     thermostat.up();
    //   }
    //   thermostat.up();
    //   expect(thermostat.currentTemp()).toEqual(32)
    // })

    describe('when power saving mode is on', function() {
      it('has a maximum temperature of 25 celcius', function(){
        for (i = 0; i < 7; i++) {
          thermostat.up();
        }
        expect(thermostat.currentTemp()).toEqual(25);
      })
    })
    describe('when power saving mode is off', function() {
      it('has a maximum temperature of 32 celcius', function(){
        thermostat.switchPowerSavingModeOff();
        for (i = 0; i < 15; i++) {
          thermostat.up();
        }
        expect(thermostat.currentTemp()).toEqual(32);
      })
    })
  })
});
