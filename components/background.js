var Radium = require('../../modules');
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;
var Style = require('../../modules/components/style.js');
var PrintStyleSheet = require('../../modules/components/print-style-sheet.js');
var InlineCss = require('react-inline-css');

var Background = React.createClass({


  render: function () {
    if (this.state && this.state.shouldRenderNull) {
      return null;
    }

    return (
      <div>

      <Grid>
        <Row>

           <Col xs={6} md={3} >

                <img href='#' src='/components/img/logo.png' style={logoStyle.initial}/>   

           </Col>

          <Col xs={6} md={3} mdOffset={4}>

                      

          </Col>
        </Row>
      </Grid>


        <Style
          rules={{
              body: {
                margin: 0,
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                // background: 'url(trial_background.jpg)'
                background: 'rgb(41,172,177)' 

              },
              mediaQueries: {
                '(max-width: 600px)': {
                  body: {
                    background: 'gray'
                  }
                },
                '(max-width: 500px)': {
                  body: {
                    background: 'blue'
                  },
                  'p, h1': {
                    color: 'white'
                  }
                }
              }
          }}
        />

        <p className="scoping-class">
          <Style
            scopeSelector=".scoping-class"
            rules={{
              span: {
                fontFamily: 'Lucida Console, Monaco, monospace'
              }
            }}
          />

        </p>

        <PrintStyleSheet />
      </div>
    );
  }
});
module.exports = Radium(Background);



var searchStyle = {
    initial:{
      margin: '-14px',
      borderRadius: 100,
      width: 200,
      height: 30
      //background: 'url(img/search.png)'
    },
};


var logoStyle = {
  initial: {
    //padding: '10px',
    margin: '20px',
    // margin: '20px',
    // borderRadius: 300,
    //margin: auto,
    width: '170%',
    cursor: 'pointer',
    background: '#29ACB1',
    //float: 'right'
  }

};

var iconStyle = {
  initial: {
    //width: '50',
    //height:'100',
    //padding:'-30px',
    margin: '-8px',
    color: 'black',
    // background: 'Orange',
    
    // background: 'white'
  }

};



