import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from './Layout';

const Home = (props: RouteComponentProps | any) => {
  const { children } = props;
  return <Layout>{children}</Layout>;
};

export default Home;
