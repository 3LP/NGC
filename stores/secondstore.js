var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

/***Events***/
var CHANGE_EVENT = 'change';

var _formInput = { 
  CostMin: false, 
  CostMax: false,
  AgeMin: false,
  AgeMax: false,
  DurrationMin: false,
  DurrationMax: false,
  ThrillMin: false,
  ThrillMax: false,
  PhysicalActivityMin: false,
  PhysicalActivityMax: false
};
