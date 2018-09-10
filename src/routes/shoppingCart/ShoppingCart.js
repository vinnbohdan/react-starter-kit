import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styles from './styles';
import Link from '../../components/Link';

class ShoppingCart extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  state = {
    list: JSON.parse(localStorage.getItem('list')) || [],
  };

  handleClick = id => () => {
    // console.log('id', id);
    let listItems = [...this.state.list];
    // console.log('listItems', listItems);
    if (!Array.isArray(listItems) || !listItems.length) {
      listItems = [];
    } else {
      const updatedList = listItems.filter(item => item.id !== id);
      // console.log('updatedList', updatedList);

      this.setState({ list: updatedList });
      // console.log('state', this.state);

      // update localStorage
      localStorage.setItem('list', JSON.stringify(updatedList));
    }
  };

  render() {
    const { classes } = this.props;
    const listItems = [...this.state.list];

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell numeric>Quantity</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell numeric>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listItems.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.quantity}</TableCell>
                <TableCell numeric>{row.price}</TableCell>
                <TableCell numeric>
                  <Button
                    onClick={this.handleClick(row.id)}
                    variant="fab"
                    aria-label="Delete"
                    className={classes.button}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              {listItems.length === 0 ? (
                <Button
                  disabled
                  component={Link}
                  to="/CheckOut"
                  variant="extendedFab"
                  aria-label="Add to shopping cart"
                  className={classes.button}
                >
                  CheckOut
                  <AddShoppingCartIcon />
                </Button>
              ) : (
                <Button
                  component={Link}
                  to="/CheckOut"
                  variant="extendedFab"
                  aria-label="Add to shopping cart"
                  className={classes.button}
                >
                  CheckOut
                  <AddShoppingCartIcon />
                </Button>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(ShoppingCart);
