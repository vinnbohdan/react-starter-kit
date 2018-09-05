/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import * as allSubcategoriesActions from '../../actions/allSubcategories';
import Subcategory from '../subcategory/Subcategory';

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
        cols={3}>
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
export default connectRedux(withStyles(styles)(SubcategoriesGrid));