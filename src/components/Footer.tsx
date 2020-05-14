import React from 'react';
import { Link } from '@reach/router';

const Footer = () => {
  const getClasses = ({ isCurrent }: { isCurrent: boolean }) => ({
    className: isCurrent ? 'nav-link active' : 'nav-link',
  });
  return (
    <footer className='footer'>
      <small>
        <div className='container'>
          <hr />
        </div>
        <nav className='navbar navbar-expand-sm navbar-light'>
          <div className='container'>
            <Link className='navbar-brand small text-uppercase' to='/'>
              Adrenalin
            </Link>
            <div className='navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav  ml-auto'>
                <li className='nav-item'>
                  <Link getProps={getClasses} to='/privacy'>
                    Privacy
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link getProps={getClasses} to='/sitemap'>
                    Sitemap
                  </Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Facebook
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    LinkedIn
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Instagram
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </small>
    </footer>
  );
};

export default Footer;
