import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine,} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whatcoop">What is Coop?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

// BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);

  return (
    <div className='coop__navbar'>
        <div className='coop__navbar-links'>
          <div className='coop__navbar-links_logo'>
             <img src={logo} alt='logo' />
          </div>
          <div className='coop__navbar-links_container'>
            <Menu/>
          </div>
        </div>
        <div className='coop__navbar-sign'>
          <p>Sign in</p>
          <button tupe="button">Sign up</button>
        </div>
        <div className="coop__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setTogglemenu(false)}/>
            : <RiMenu3Line color="#fff" size={27} onClick={() => setTogglemenu(true)}/>
          } 
          {toggleMenu && (
            <div className="coop__navbar-menu_container scale-up-center">
              <div className='coop__navbar-menu_container-links'>
                <Menu/>
                <div className='coop__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button tupe="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar