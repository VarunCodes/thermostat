'use strict';

function Thermostat(){
  this.temp = 20;
  this.MINIMUM_TEMP = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
};

Thermostat.prototype.currentTemp = function(){
  return this.temp;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temp === this.MINIMUM_TEMP;
}

Thermostat.prototype.up = function(){
  if (this.psmMode === false)
   this.maxTemp = 32
  else {
    this.maxTemp = 25
  }

  if (this.temp < this.maxTemp) {
  this.temp += 1;
} else {
  this.temp = this.maxTemp;
}
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemp()) {
  return;
} else {
  this.temp -= 1;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
};
