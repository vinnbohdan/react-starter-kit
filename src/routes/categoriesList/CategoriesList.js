/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CategoriesList.css';
import * as categoriesActions from '../../actions/categories';

class CategoriesList extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getCategories: PropTypes.func.isRequired,
    resetCategories: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }
  componentWillUnmount() {
    // clear category's state when leave page
    const { resetCategories } = this.props;
    resetCategories();
  }
  render() {
    // console.log(this.props);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>CategoriesList:</h1>
          {this.props.categories.map(item => (
            <div className={s.categoryItem} key={item.id}> {item.name} </div>
          ))}
        </div>
      </div>
    );
  }
}

const connectRedux = connect(
  state => ({
    categories: state.categories.items,
    loadingCategories: state.categories.loading,
    total: state.categories.total,
    error: state.categories.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...categoriesActions,
      },
      dispatch,
    ),
);
export default connectRedux(withStyles(s)(CategoriesList));
