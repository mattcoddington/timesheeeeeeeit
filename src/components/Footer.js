import React, { Component } from 'react';
import '../components/Footer.css';
import mc from '../images/mc.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
          <div><img src={mc} alt="MC" /></div>
          <div>&nbsp;</div>
      </div>
    );
  }
}

export default Footer;
