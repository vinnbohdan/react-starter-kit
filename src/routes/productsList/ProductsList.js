/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import s from './HotProductsList.css';
import * as allProductsActions from '../../actions/allProducts';
import Product from '../product/Product';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class ProductsList extends React.Component {
  static propTypes = {
    subcategoryId: PropTypes.number.isRequired,
    allProducts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
      }),
    ).isRequired,
    getAllProducts: PropTypes.func.isRequired,
    resetAllProducts: PropTypes.func.isRequired,
    // classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  componentDidMount() {
    const { getAllProducts, subcategoryId } = this.props;
    getAllProducts(subcategoryId);
  }
  componentWillUnmount() {
    // clear hotProducts's state when leave page
    const { resetAllProducts } = this.props;
    resetAllProducts();
  }
  render() {
    return (
      <GridList
        cols={3}>
        {this.props.allProducts.map(item =>
          <GridListTile key={item.id}>
            <Product key={item.id}  name={item.name} cost={item.cost} />
          </GridListTile>)}
      </GridList>
    );
  }
}

const connectRedux = connect(
  state => ({
    allProducts: state.allProducts.items,
    loadingAllProducts: state.allProducts.loading,
    total: state.allProducts.total,
    error: state.allProducts.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...allProductsActions,
      },
      dispatch,
    ),
);
// export default connectRedux(withStyles(s)(HotProductsList));
export default connectRedux(withStyles(styles)(ProductsList));
