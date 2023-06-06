import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './UserNavbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/user' className='navbar-logo' onClick={closeMobileMenu}>
            OFFICE
            <i className='fas fa-building fa-sm' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item dropdown'>
  <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
    Services<i className='fas fa-caret-down' />
  </Link>
  <div className='dropdown-content'>
    <Link to='/services#certificates-section' className='dropdown-link' onClick={closeMobileMenu}>
      Certificates
    </Link>
    <Link to='/scholarships' className='dropdown-link' onClick={closeMobileMenu}>
      Scholarships
    </Link>
    <Link to='/fees' className='dropdown-link' onClick={closeMobileMenu}>
      Fee Details
    </Link>
  </div>
</li>
            <li>
              <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Log Out
              </Link>
            </li>
          </ul>
         <div className='hlo'> {button && <Button buttonStyle='btn--outline'><Link to='/'>LOG OUT</Link></Button>}</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
