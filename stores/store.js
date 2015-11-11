var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
/****Events******/
var CHANGE_EVENT = 'change';
/*****Form*****/

var Store = objectAssign({}, EventEmitter.prototype, {

  /******General*****/
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

});


AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.FORM_CLICKED:
      Store.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = Store;
