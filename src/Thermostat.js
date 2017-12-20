// 'use strict';

function Thermostat(defaultTemperature = 20) {
  this.temperature = defaultTemperature;
};


Thermostat.prototype.temperatureUp = function() {
  this.temperatue++;
}

Thermostat.prototype.temperatureDown = function() {
  this.temperatue--;
}
