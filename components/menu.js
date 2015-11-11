var Radium = require('../../modules');
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;


var Menu = React.createClass({


  render: function () {


    return (
      <div>

        <Navbar fluid toggleNavKey={0} fixedBottom brand={<a href="#"> <img href='#' src='/components/img/footer_logo.png' style={menuStyle.initial}/> </a>}>

          <Nav left eventKey={0}>
              <NavItem>  </NavItem>
              <NavItem className="active" eventKey={1} href="#home">about</NavItem>
              <NavItem eventKey={2} href="#about">contact</NavItem>
              <NavItem eventKey={2} href="#about">help</NavItem>
          </Nav>
        </Navbar>

      </div>
    );
  }
});

module.exports = Radium(Menu);


var menuStyle = {
    initial:{
      margin: '-5px',
      width: '30px',
      height:'30px',
      padding:'-15px'
    }
};
