/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import * as allCategoriesActions from '../../actions/allCategories';
import Category from '../category/Category';

class CategoriesGrid extends React.Component {
  static propTypes = {
    allCategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getAllCategories: PropTypes.func.isRequired,
    resetAllCategories: PropTypes.func.isRequired,
    // classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  componentDidMount() {
    const { getAllCategories } = this.props;
    getAllCategories();
  }
  componentWillUnmount() {
    const { resetAllCategories } = this.props;
    resetAllCategories();
  }
  render() {
    return (
      <GridList
        style={{ marginTop: '50px'}}
        cols={3}>
        {this.props.allCategories.map(item =>
          <GridListTile key={item.id}>
            <Category name={item.name} id={item.id}/>
          </GridListTile>)}
      </GridList>
    );
  }
}

const connectRedux = connect(
  state => ({
    allCategories: state.allCategories.items,
    loadingAllCategories: state.allCategories.loading,
    total: state.allCategories.total,
    error: state.allCategories.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...allCategoriesActions,
      },
      dispatch,
    ),
);
export default connectRedux(CategoriesGrid);
