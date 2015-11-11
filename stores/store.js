var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
/****Events******/
var CHANGE_EVENT = 'change';
/*****Form*****/
//
var formInput = { 
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


var apiResults = {
    "activily-api": "0.0.1",
    "timestamp": "",
    "activity-groups": [
        {
            "bowling": [
                {
                    "name": "Boardwalk Bowl",
                    "address": "115 Cliff St, Santa Cruz, CA 95060, United States",
                    "lat": 36.964506,
                    "lng": -122.02063,
                    "phone": "831-426-3324",
                    "website": "http://www.boardwalkbowl.com/",
                    "scores": {
                        "google": 4,
                        "yelp": 3.5,
                        "foursquare": 3
                    }
                }
            ]
        },
        {
            "Stand Up Paddle Boarding": [
                {
                    "name": "Covewater Paddle Surf",
                    "address": "726 Water St, Santa Cruz, CA 95060, United States",
                    "lat": 36.980779,
                    "lng": -122.016419,
                    "phone": "831-600-7230",
                    "website": "http://www.covewater.com/",
                    "scores": {
                        "google": 4.5,
                        "yelp": 4.5,
                        "foursquare": 4
                    }
                },
                {
                    "name": "Capitola Surf and Paddle",
                    "address": "208 San Jose Ave, Capitola, CA 95010, United States",
                    "lat": 36.973251,
                    "lng": -121.951095,
                    "phone": "831-435-6503",
                    "website": "http://www.capitolasurfandpaddle.com/",
                    "scores": {
                        "google": 4,
                        "yelp": 3.5,
                        "foursquare": 3
                    }
                },
                {
                    "name": "SUP Shack Santa Cruz",
                    "address": "2214 E Cliff Dr, Santa Cruz, CA 95062, United States",
                    "lat": 36.96348,
                    "lng": -122.001038,
                    "phone": "831-464-7467",
                    "website": "http://www.supshacksantacruz.com/",
                    "scores": {
                        "google": 4,
                        "yelp": 3.5,
                        "foursquare": 3
                    }
                }
            ]
        },
        {
            "billiards": [
                {
                    "name": "Surf City Billiards Bar & Cafe",
                    "address": "931 Pacific Ave, Santa Cruz, CA 95060, United States",
                    "lat": 36.970608,
                    "lng": 122.025542,
                    "phone": "831-423-7665",
                    "website": "",
                    "scores": {
                        "google": 4,
                        "yelp": 3.5,
                        "foursquare": 3
                    }
                },
                {
                    "name": "Fast Eddy's Billiards",
                    "address": "4300 Capitola Rd, Capitola, CA 95010, United States",
                    "lat": 36.973062,
                    "lng": -121.961648,
                    "phone": "831-462-1882",
                    "website": "http://fasteddysbilliards.com/",
                    "scores": {
                        "google": 4,
                        "yelp": 3.5,
                        "foursquare": 3
                    }
                }
            ]
        },
        {
            "kayaking": [
                {
                    "name": "Venture Quest Kayaking",
                    "address": "2 Municipal Wharf, Santa Cruz, CA 95060, United States",
                    "lat": 36.961132,
                    "lng": -122.021082,
                    "phone": "831-425-8445",
                    "website": "http://www.kayaksantacruz.com/",
                    "scores": {
                        "google": 5,
                        "yelp": 3.5,
                        "foursquare": 3
                    }
                },
                {
                    "name": "Kayak Connection",
                    "address": "413 LakeAve #3, Santa Cruz, CA 95062, United States",
                    "lat": 36.966768,
                    "lng": -122.001025,
                    "phone": "831-479-1121",
                    "website": "http: //www.kayakconnection.com/",
                    "scores": {
                        "google": 4,
                        "yelp": 3,
                        "foursquare": 5
                    }
                }
            ]
        }
    ]
};
//
var coords = {
  lat: 'false', 
  lng: 'false' 
};

var ActivityGroups = apiResults["activity-groups"];
var Bowling = ActivityGroups[0].bowling[0];
var PaddleBoard = ActivityGroups[1];
var PaddleBoardPlaces = PaddleBoard["Stand Up Paddle Boarding"];
var Billiards = ActivityGroups[2].billiards[0];
var Kayaking = ActivityGroups[3].kayaking[0];

//
//
// 
var whenForm = {
  Day: '../components/whenpage/icons/daytime.png',
  Evening: '../components/whenpage/icons/evening.png',
  Night: '../components/whenpage/icons/nighttime.png'
};
//
/****Form Functions****/

var underTwentyOne = function(){
  formInput.AgeMin = 1;
  formInput.AgeMaX = 20;
};

var overTwentyOne = function(){
  formInput.AgeMin = 21;
  formInput.AgeMax = 100;
};

var feelingRelaxed = function(){
  formInput.PhysicalActivityMin = 1;
  formInput.PhysicalActivityMax = 4;
};

var feelingModerate = function() {
  formInput.PhysicalActivityMin = 4;
  formInput.PhysicalActivityMax = 7;
};

var feelingStrenuous = function() {
  formInput.PhysicalActivityMin = 7;
  formInput.PhysicalActivityMax = 9;
};

var costFree = function() {
  formInput.CostMin = 0;
  formInput.CostMax = 0;
};

var costFifteen = function() {
  formInput.CostMin = 0;
  formInput.CostMax = 15;
};

var costForty = function() {
  formInput.CostMin = 0;
  formInput.CostMax = 40;
};

var costSeventyFive = function() {
  formInput.CostMin = 0;
  formInput.CostMax = 75;
};

var costSky = function() {
  formInput.CostMin = 0;
  formInput.CostMax = 10000;
};
//
// Where Form
//
var _store = {
  lat: 'false',
  lng: 'false'
};

var userCoords = {
   lat: 47.64710,
   lng: -102.3944
  //lat: -14.3652,
  //lng: -51.6913
};


var addLat = function(item){
  _store.lat = item;
  //userCoords.lat = _store.lat;
};

var addLng = function(item){
  _store.lng = item;
  //userCoords.lng = _store.lat;
};


//
// Results Setter Functions
//
var activity = {
  one: Bowling.name,
  two: PaddleBoardPlaces[0].name,
  three: Billiards.name,
  four: Kayaking.name
};
/*Initial*/
var activityLocation = {
  lat: Bowling.lat,
  lng: Bowling.lng
};

var ActivityName = Bowling.name;
//Setter Functions for Activities and API Response
var setActName_Paddling = function() {
  ActivityName =  PaddleBoardPlaces[0].name;
};

var setActName_Kayaking = function() {
  ActivityName = Kayaking.name;
};

var setActName_Bowling = function() {
  ActivityName = Bowling.name;
};

var setActName_Billiards = function() {
  ActivityName = Billiards.name;
};


var setCoord_Paddling = function() {
  activityLocation.lng =  PaddleBoardPlaces[0].lng;
  activityLocation.lat = PaddleBoardPlaces[0].lat;
};

var setCoord_Kayaking = function() {
  activityLocation.lng =  Kayaking.lng;
  activityLocation.lat = Kayaking.lat;
};

var setCoord_Bowling = function() {
  activityLocation.lng =  Bowling.lng;
  activityLocation.lat = Bowling.lat;
};

var setCoord_Billiards = function() {
  activityLocation.lng =  Billiards.lng;
  activityLocation.lat = Billiards.lat;
};



var Store = objectAssign({}, EventEmitter.prototype, {

  /******General*****/
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

  addChangeListenerSkyForm: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListenerSkyForm: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

  getUserCoordIniLat: function() {
    return userCoords.lat;
  },

  getUserCoordIniLng: function() {
    return userCoords.lng;
  },

  getUserCoordLat: function() {
    return _store.lat;
  },

  getUserCoordLng: function() {
    return _store.lng;
  },

  getLaterFormDay: function(){
    return whenForm.Day;
  },

  getLaterFormEvening: function(){
    return whenForm.Evening;
  },

  getLaterFormNight: function(){
    return whenForm.Night;
  },

  /***Results****/
  getResultsLat: function() {
    return activityLocation.lat;
  },

  getResultsLng: function() {
    return activityLocation.lng;
  },

  getActivityName: function() {
    return ActivityName;
  },

  getActivity1: function() {
    return activity.one;
  },
  getActivity2: function() {
    return activity.two;
  },
  getActivity3: function(){
    return activity.three;
  },
  getActivity4: function(){
    return activity.four;
  }

});


AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.FORM_CLICKED:
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.PHYSICAL_ACTIVITY_MIN:
      feelingRelaxed();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.PHYSICAL_ACTIVITY_MID:
      feelingModerate();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.PHYSICAL_ACTIVITY_MAX:
      feelingStrenuous();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.AGE_OVER_21:
      overTwentyOne();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.AGE_UNDER_21:
      underTwentyOne();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.COST_FREE:
      costFree();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.COST_FIFTEEN:
      costFifteen();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.COST_FORTY:
      costForty();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.COST_SEVENTYFIVE:
      costSeventyFive();
      Store.emit(CHANGE_EVENT);
      break;  
    case appConstants.COST_SKY:
      costSky();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.BOWLING:
      setActName_Bowling();
      setCoord_Bowling();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.BILLIARDS:
      setActName_Billiards();
      setCoord_Billiards();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.PADDLING:
      setActName_Paddling(); 
      setCoord_Paddling();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.KAYAKING:
      setActName_Kayaking();
      setCoord_Kayaking();
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.ADD_LAT:
      addLat(action.data);
      Store.emit(CHANGE_EVENT);
      break;
    case appConstants.ADD_LNG:
      addLng(action.data);
      Store.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = Store;
