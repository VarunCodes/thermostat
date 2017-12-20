'use strict';

function Thermostat(){
  this.temp = 20;
  this.minimumTemp = 10;
};

Thermostat.prototype.currentTemp = function(){
  return this.temp;
};

Thermostat.prototype.up = function(){
  this.temp += 1;
};

Thermostat.prototype.down = function(){
  if (this.temp > this.minimumTemp) {
  this.temp -= 1;
} else {
  this.temp = 10;
}
};
