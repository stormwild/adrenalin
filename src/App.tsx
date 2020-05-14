import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Culture from './components/Culture';
import Work from './components/Work';
import Clients from './components/Clients';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Sitemap from './components/Sitemap';

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Culture path='/culture' />
      <Work path='/work' />
      <Clients path='/clients' />
      <Services path='/services' />
      <Careers path='/careers' />
      <Contact path='/contact' />
      <Privacy path='/privacy' />
      <Sitemap path='/sitemap' />
    </Router>
  );
};

export default App;
