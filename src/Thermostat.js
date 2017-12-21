'use strict';

function Thermostat(){
  this.temp = 20;
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

  if (this.powerSavingMode === false) {
    return this.temp === this.MAX_LIMIT_PSM_OFF;
  } else {
  return this.temp === this.MAX_LIMIT_PSM_ON;
}
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

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};
};
