/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HotProductsList.css';
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
      <div className={s.root}>
        <div className={s.container}>
          {this.props.hotProducts.map(item => <Product key={item.id}  name={item.name} cost={item.cost} />)}
        </div>
      </div>
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
export default connectRedux(withStyles(s)(HotProductsList));
