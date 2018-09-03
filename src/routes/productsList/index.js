import React from 'react';

import Layout from '../../components/Layout';
import ProductsList from './ProductsList';

export default async function action(context) {
  // console.log('---', context);
  const subcategoryId = context.params.id;
  return {
    chunks: ['productsList'],
    title: 'React Starter Kit',
    component: (
      <Layout>
        <ProductsList subcategoryId={subcategoryId} />
      </Layout>
    ),
  };
}
