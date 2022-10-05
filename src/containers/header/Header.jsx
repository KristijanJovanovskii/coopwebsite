import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import coop from '../../assets/cooplogo.png';

const Header = () => {
  return (
    <div className="coop__header section__padding" id="home">
      <div className="coop__header-content">
        <h1 className="gradient__text">Senior or junior, we all work together!</h1>
        <p>Purpose of site: Seniors give mentorship and help to juniors
            Juniors find seniors doing jobs they want to be doing at companies they want to work for
            A matching component that matches seniors and juniors based off of info they provide
            Maybe also a way to connect with peers</p>

        <div className="coop__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get started</button>
        </div>

        <div className='coop__header-content__people'>
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className="coop__header-image">
        <img src={coop} alt="coop" />
      </div>
    </div>
  )
}

export default Header