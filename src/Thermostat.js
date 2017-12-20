'use strict';

function Thermostat(){
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.psmMode = true
};

Thermostat.prototype.currentTemp = function(){
  return this.temp;
};

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
  if (this.temp > this.minTemp) {
  this.temp -= 1;
} else {
  this.temp = 10;
}

Thermostat.prototype.psm = function(psm){
  if (this.psmMode === false)
   this.maxTemp = 32
  else {
    this.maxTemp = 25
  }
 }





};
