import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Footer from './Footer';
import Header from './Header';

const Layout = (props: RouteComponentProps | any) => {
  const { children } = props;

  return (
    <>
      <Header {...props} />
      <main role='main' className='main container py-3'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
