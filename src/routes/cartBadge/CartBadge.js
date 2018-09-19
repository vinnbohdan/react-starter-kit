import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './styles';
import Link from '../../components/Link';

class CartBadge extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { classes } = this.props;
    return (
      <IconButton
        aria-label="Cart"
        component={Link}
        to="/shoppingCart"
        color="primary"
        classes={{ root: classes.badge }}
      >
        <ShoppingCartIcon />
      </IconButton>
    );
  }
}

export default withStyles(styles)(CartBadge);
