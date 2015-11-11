var React = require('react');
var Router = require('react-router-component');
var Menu = require('./components/menu');
var Background = require('./components/background');
var WhoPage = require('./components/whopage/whopage');
var WhatPage = require('./components/whatpage/whatpage');
var WhenPage = require('./components/whenpage/whenpage');
var WherePage = require('./components/wherepage/wherepage');
var HowMuchPage = require('./components/howmuch/howmuch');
var ThrillFactorPage = require('./components/thrillfactor/thrillfactor');
var ResultsPage1 = require('./components/results/results1');
var Radium = require('../modules');
var Location = Router.Location;
var Link = Router.Link;
var Locations = Router.Locations;
var Actions = require('./actions/actions');
var Store = require('./stores/store');
var ReactDOM = require('react-dom');
var App = React.createClass({

  render: function(){
    return (
      <div>
 
     <Locations>
        <Location path="/" handler={WhoPage} />
        <Location path="/what" handler={WhatPage} />
        <Location path="/when" handler={WhenPage} />
        <Location path="/where" handler={WherePage} />
        <Location path="/howmuch" handler={HowMuchPage} />
        <Location path="/results1" handler={ResultsPage1} />
        <Location path="/thrillfactor" handler={ThrillFactorPage} />
      </Locations>

      </div>
    )
  }
});


ReactDOM.render(<App />,document.getElementById('app'));
ReactDOM.render(<Background />, document.getElementById('background'));
ReactDOM.render(<Menu />, document.getElementById('menu'));