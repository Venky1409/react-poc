import React, { Component } from 'react';
import './nav.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'; 

  function Navbar() {
    function navBarFunc() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    return (
        <div className="topnav" id="myTopnav">
          <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" alt="logo" style={{width: "40px", position: "absolute", top: "6px"}}/>
          {/* <NavLink to="/" exact activeStyle={ {color: "black"} }>Home</NavLink> */}
          <NavLink to="/user" exact >User</NavLink>
          {/* <NavLink to="/page2" exact activeStyle={ {color: "black"} }>Edit Profile</NavLink> */}
          <NavLink to="/converter" exact >CURRENCY CONVERTER</NavLink>
          <NavLink to="/exchangeRates" exact >CURRENCY EXCHANGE RATES</NavLink>
          <a className="icon" onClick={navBarFunc}>
            <i className="fa fa-bars"></i>
          </a>
      </div>
    );
}

export default Navbar;
