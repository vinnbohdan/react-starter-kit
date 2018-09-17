import React from 'react';
import CheckOut from './CheckOut';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  return {
    title: 'CheckOut',
    chunks: ['checkOut'],
    component: (
      <Layout>
        <CheckOut fetch={fetch} />
      </Layout>
    ),
  };
}

export default action;
