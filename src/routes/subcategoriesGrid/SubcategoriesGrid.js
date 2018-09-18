/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import * as allSubcategoriesActions from '../../actions/allSubcategories';
import Subcategory from '../subcategory/Subcategory';

class SubcategoriesGrid extends React.Component {
  static propTypes = {
    categoryId: PropTypes.number.isRequired,
    allSubcategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getAllSubcategories: PropTypes.func.isRequired,
    resetAllSubcategories: PropTypes.func.isRequired,
    // classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  componentDidMount() {
    const { getAllSubcategories, categoryId } = this.props;
    getAllSubcategories(categoryId);
  }
  componentWillUnmount() {
    const { resetAllSubcategories } = this.props;
    resetAllSubcategories();
  }
  render() {
    return (
      <GridList
        cols={3}
        style={{ marginTop: '50px'}}
      >
        {this.props.allSubcategories.map(item =>
          <GridListTile key={item.id}>
            <Subcategory name={item.name} id={item.id}/>
          </GridListTile>)}
      </GridList>
    );
  }
}

const connectRedux = connect(
  state => ({
    allSubcategories: state.allSubcategories.items,
    loadingAllSubcategories: state.allSubcategories.loading,
    total: state.allSubcategories.total,
    error: state.allSubcategories.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...allSubcategoriesActions,
      },
      dispatch,
    ),
);
export default connectRedux(SubcategoriesGrid);
