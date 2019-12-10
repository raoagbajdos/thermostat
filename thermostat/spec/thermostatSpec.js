'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.currentTemperature()).toEqual(20);
    });
    it('increases the temperature by a degree', function(){
      thermostat.upTemperature();
      expect(thermostat.currentTemperature()).toEqual(21);
    });
    it('decreases the temperature by a degree', function(){
      thermostat.downTemperature();
      expect(thermostat.currentTemperature()).toEqual(19);
    });
    it('is the minimum temperature', function(){
      for (var i = 0; i < 11; i++) {
        thermostat.downTemperature();
      };
    expect(thermostat.currentTemperature()).toEqual(10);
    });
    it('has a power saving mode on default', function(){
      expect(thermostat.isPowerSavingMode()).toBe (true);
    });
    describe('when power saving mode is on', function() {
  it('has a maximum temperature of 25 degrees', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    describe('when power saving mode is off', function() {
  it('has a maximum temperature of 32 degrees', function() {
    thermostat.switchPowerSavingModeOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    };
    expect(thermostat.currentTemperature()).toEqual(32);
  });
    expect(thermostat.currentTemperature()).toEqual(25);
    it('switches off power saving mode', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingMode()).toBe (false);
    });
    it('switches on power saving mode', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingMode()).toBe (false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingMode()).toBe (true);
    });
    it('resets temperature to 20 degrees', function(){
      thermostat.resetCurrentTemperature();
      expect(thermostat.currentTemperature()).toBe (20);
    });
    it('tells you the current energy usage', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.upTemperature();
      };
      expect(thermostat.currentTemperature()).toEqual(25);
    });
    describe('displaying usage levels', function() {
  describe('when the temperature is below 18 degrees', function() {
    it('it is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the temperature is anything else', function() {
    it('it is considered high-usage', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
    });
    };
});
});
});
});
