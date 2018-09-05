import React from 'react';

import Layout from '../../components/Layout';
import CategoriesGrid from './CategoriesGrid';

export default async function action() {
  // console.log('---', context);
  return {
    chunks: ['categoriesGrid'],
    title: 'Categories',
    component: (
      <Layout>
        <CategoriesGrid />
      </Layout>
    ),
  };
}
