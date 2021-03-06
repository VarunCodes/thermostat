'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temp === this.MINIMUM_TEMP;
};

Thermostat.prototype.isMaximumTemp = function() {
console.log("powersaving " + this.isPowerSavingModeOn())
  if (this.isPowerSavingModeOn() === false) {
    return this.temp === this.MAX_LIMIT_PSM_OFF;
  } else {
  return this.temp === this.MAX_LIMIT_PSM_ON;
}
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemp()) {
    return;
  }
  this.temp += 1;
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemp()) {
  return;
} else {
  this.temp -= 1;
}
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
  if (this.temp > 25) {
    this.temp = 25;
  }
};

Thermostat.prototype.resetTemp = function() {
  this.temp = this.DEFAULT_TEMP;
}
