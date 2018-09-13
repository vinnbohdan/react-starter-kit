import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './styles';

class CartBadge extends React.Component {
  static propTypes = {
    items: PropTypes.number,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  static defaultProps = {
    items: 0,
  };

  render() {
    const { classes, items } = this.props;
    return (
      <IconButton aria-label="Cart">
        <Badge
          badgeContent={items}
          color="primary"
          classes={{ badge: classes.badge }}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    );
  }
}

export default withStyles(styles)(CartBadge);
