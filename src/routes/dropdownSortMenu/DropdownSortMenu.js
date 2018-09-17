import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './styles';

class DropdownSortMenu extends React.Component {
  handleChange = event => {
    let value = {};
    // console.log(event.target.value);
    switch (event.target.value) {
      case '2':
        value = { cost: 'DESC' };
        // console.log('2', value);

        break;
      case '3':
        value = { name: 'ASC' };
        // console.log('3', value);

        break;
      case '4':
        value = { name: 'DECS' };
        // console.log('4', value);
        break;
      default:
        value = { cost: 'ASC' };
      // console.log('1', value);
    }
    // console.log('value', value);
    const pass = { sort: value, item: event.target.value };
    this.props.onSortChanged(pass);
  };

  render() {
    const { classes, item } = this.props;
    return (
      <NativeSelect
        className={classes.selectEmpty}
        value={item || 1}
        name="sort"
        onChange={this.handleChange}
      >
        <option value="" disabled>
          Sort by
        </option>
        <option value={1}>Price (asc)</option>
        <option value={2}>Price (desc)</option>
        <option value={3}>Name (asc)</option>
        <option value={4}>Name (desc)</option>
      </NativeSelect>
    );
  }
}
DropdownSortMenu.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onSortChanged: PropTypes.func.isRequired,
  item: PropTypes.number.isRequired,
};

export default withStyles(styles)(DropdownSortMenu);
