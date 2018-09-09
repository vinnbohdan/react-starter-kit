/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from '@material-ui/core/Button';
import Link from '../../components/Link';
import s from './CategoriesList.css';
import * as categoriesActions from '../../actions/categories';

const itemsLimit = 5;

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
    const { resetCategories } = this.props;
    resetCategories();
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.categories.slice(0, itemsLimit).map(item =>
            <div key={item.id} className={s.categoryItem}>
              {
                item.id === itemsLimit ?
                  <Button component={Link} to="/categories" size="small" color="primary"> Show all categories </Button>
                  :
                  <Button component={Link} to={`/subcategories/${item.id}`} size="small" color="primary"> {item.name} </Button>
              }
              {
                item.id < itemsLimit ?
                  <div className={s.subcategoryItem}>
                    {item.Subcategories.slice(0, itemsLimit).map((subitem, index) =>
                      index >= itemsLimit - 1 ?
                        <Button key={subitem.id} component={Link} to={`/subcategories/${item.id}`} size="small" color="primary"> Show more </Button>
                        :
                        <Button key={subitem.id} component={Link} to={`/subcategories/${subitem.id}/products`} size="small" color="primary"> {subitem.name} </Button>)
                    }
                  </div>
                  :
                  null
              }
            </div>
          )}
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
