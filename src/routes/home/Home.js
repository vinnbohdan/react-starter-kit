/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CategoriesList from '../categoriesList/CategoriesList';
import HotProductsList from '../hotProductsList/HotProductsList';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <CategoriesList />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <HotProductsList />
        </Grid>
      </React.Fragment>
    );
  }
}

export default Home;
