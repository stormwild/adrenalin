import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  const getClasses = ({ isCurrent }: { isCurrent: boolean }) => ({
    className: isCurrent ? 'nav-link active' : 'nav-link',
  });

  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <Link className='navbar-brand text-uppercase' to='/'>
          Adrenalin
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav  ml-auto'>
            <li className='nav-item'>
              <Link getProps={getClasses} to='/culture'>
                Culture
              </Link>
            </li>
            <li className='nav-item'>
              <Link getProps={getClasses} to='/work'>
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link getProps={getClasses} to='/clients'>
                Clients
              </Link>
            </li>
            <li className='nav-item'>
              <Link getProps={getClasses} to='/services'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link getProps={getClasses} to='/careers'>
                Careers
              </Link>
            </li>
            <li className='nav-item'>
              <Link getProps={getClasses} to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
