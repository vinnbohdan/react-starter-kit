import React from 'react';

import Layout from '../../components/Layout';
import SubcategoriesGrid from './SubcategoriesGrid';

export default async function action(context) {
  // console.log('---', context);
  const categoryId = context.params.id;
  return {
    chunks: ['subcategoriesGrid'],
    title: 'Subcategories',
    component: (
      <Layout>
        <SubcategoriesGrid categoryId={categoryId} />
      </Layout>
    ),
  };
}
