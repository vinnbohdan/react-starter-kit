/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

class Footer extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  render() {
    return (
      <footer
        className={classNames(
          this.props.classes.footer,
          this.props.classes.layout,
        )}
      >
        <Grid container spacing={32} justify="space-evenly">
          <Grid item xs>
            <Typography variant="title" color="textPrimary" gutterBottom>
              © Eliftech market
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              Home
            </Typography>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
