import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='coop__footer section__padding'>
        <div className='coop__footer-heading'>
          <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        </div>

        <div className='coop__footer-btn'>
          <p>Join Us</p>
        </div>

        <div className='coop__footer-links'>
          <div className='coop__footer-links_logo'>
            <img src={logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor.</p>
          </div>
          <div className='coop__footer-links_div'>
            <h4>Links</h4>
            <p>Social media</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum</p>
            <p>Lorem, ipsum</p>
          </div>
          <div className='coop__footer-links_div'>
            <h4>about us</h4>
            <p>terms & conditions</p>
            <p>privacy policy.</p>
            <p>contact</p>
          </div>
          <div className='coop__footer-links_div'>
            <h4>get in touch</h4>
            <p>Lorem ipsum dolor sit.</p>
            <p>555-555-555</p>
            <p>user.email@gmail.com</p>
          </div>
        </div>

        <div className='coop__footer-copyright'>
          <p>© 2022 coop. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer