import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from './Layout';

const Home = (props: RouteComponentProps) => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
