import React from 'react';

import Layout from '../../components/Layout';
import ProductsList from './ProductsList';

export default async function action() {
  return {
    chunks: ['productsList'],
    title: 'React Starter Kit',
    component: (
      <Layout>
        <ProductsList />
      </Layout>
    ),
  };
}
