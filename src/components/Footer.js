import React, { Component } from 'react';
import '../components/Footer.css';
import mc from '../images/mc.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
          <div><a href="http://www.matthewcoddington.com"><img src={mc} alt="MC" /></a></div>
          <div>&nbsp;</div>
      </div>
    );
  }
}

export default Footer;
