/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../components/Link';
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
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.categories.slice(0, 5).map(item =>
            <div className={s.categoryItem}>
              {(item.id === 5) ? <Link key={item.id} to="/api/categories/"> Show all categories </Link> : <Link key={item.id} to={`/api/subcategories/${item.id}`}> {item.name} </Link>}
              {
                item.id < 5 ?
                  <div className={s.subcategoryItem}>
                    {item.Subcategories.slice(0, 5).map((subitem, index) =>
                      index >= 4 ?
                        <Link key={subitem.id} to={`/api/subcategories/${item.id}`}> Show more </Link>
                        :
                        <Link key={subitem.id} to={`/api/products/${subitem.id}`}> {subitem.name} </Link>)
                    }
                  </div>
                :
                null
              }
          </div>)}
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
