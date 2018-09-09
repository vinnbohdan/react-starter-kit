/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
// external-global styles must be imported in your JS.
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main className={this.props.classes.layout}>{this.props.children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
