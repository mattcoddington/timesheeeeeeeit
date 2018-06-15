import React, { Component } from 'react';
import logo from '../images/timesheeeeeeeit-logo.svg';
import '../components/TopNavigation.css';

class TopNavigation extends Component {
  render() {
    return (
      <div className="top-navigation-container">
        <div className="top-navigation-subcontainer">
          <div><img src={logo} alt="logo" /></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default TopNavigation;
