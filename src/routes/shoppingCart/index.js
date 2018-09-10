import React from 'react';
import ShoppingCart from './ShoppingCart';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'React Starter Kit',
    chunks: ['shoppingCart'],
    component: (
      <Layout>
        <ShoppingCart />
      </Layout>
    ),
  };
}

export default action;
