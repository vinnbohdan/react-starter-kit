/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import * as hotProductsActions from '../../actions/hotProducts';
import Product from '../product/Product';

class HotProductsList extends React.Component {
  static propTypes = {
    hotProducts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
      }),
    ).isRequired,
    getHotProducts: PropTypes.func.isRequired,
    resetHotProducts: PropTypes.func.isRequired,
    // classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  componentDidMount() {
    const { getHotProducts } = this.props;
    getHotProducts();
  }
  componentWillUnmount() {
    // clear hotProducts's state when leave page
    const { resetHotProducts } = this.props;
    resetHotProducts();
  }
  render() {
    return (
        <GridList
          cols={3}>
          {this.props.hotProducts.map(item =>
              <GridListTile key={item.id}>
                <Product key={item.id}  id={item.id} name={item.name} cost={item.cost} />
              </GridListTile>)}
        </GridList>
    );
  }
}

const connectRedux = connect(
  state => ({
    hotProducts: state.hotProducts.items,
    loadingHotProducts: state.hotProducts.loading,
    total: state.hotProducts.total,
    error: state.hotProducts.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...hotProductsActions,
      },
      dispatch,
    ),
);
export default connectRedux(HotProductsList);

