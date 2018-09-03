/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// import IntegrationAutosuggest from '../../routes/integrationAutosuggest/IntegrationAutosuggest';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  render() {
    return (
      <AppBar
        position="static"
        color="default"
        className={this.props.classes.appBar}
      >
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={this.props.classes.toolbarTitle}
          >
            Eliftech market
          </Typography>
          {/* <IntegrationAutosuggest /> */}
          <Button>Contacts</Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
