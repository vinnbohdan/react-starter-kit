import React from 'react';
import CheckOut from './CheckOut';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'CheckOut',
    chunks: ['checkOut'],
    component: (
      <Layout>
        <CheckOut />
      </Layout>
    ),
  };
}

export default action;
