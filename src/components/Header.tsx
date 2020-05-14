import React from 'react';
import NavBar from './NavBar';

const Header = (props: any) => {
  return (
    <header className='header'>
      <NavBar {...props} />
    </header>
  );
};

export default Header;
