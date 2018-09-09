import React from 'react';

import Layout from '../../components/Layout';
import ProductDetails from './ProductDetails';

export default async function action(context) {
  // console.log('---', context);
  const productId = Number(context.params.id);
  return {
    chunks: ['productDetails'],
    title: 'React Starter Kit',
    component: (
      <Layout>
        <ProductDetails productId={productId} />
      </Layout>
    ),
  };
}
