/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withStyles} from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Drawer from '@material-ui/core/Drawer';
import * as allProductsActions from '../../actions/allProducts';
import Product from '../product/Product';
// import Specification from '../specification/Specification';
import styles from './styles';

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
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
      <React.Fragment>
        <Drawer
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          {/* <Specification subcategoryId={this.props.subcategoryId} /> */}
        </Drawer>
        <main className={this.props.classes.content}>
          <GridList
            cols={3}>
            {this.props.allProducts.map(item =>
              <GridListTile key={item.id}>
                <Product id={item.id} name={item.name} cost={item.cost} />
              </GridListTile>)}
          </GridList>
        </main>
      </React.Fragment>
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
export default connectRedux(withStyles(styles)(ProductsList));
