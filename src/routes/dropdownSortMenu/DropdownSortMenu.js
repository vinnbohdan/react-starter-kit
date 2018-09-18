import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './styles';

class DropdownSortMenu extends React.Component {
  handleChange = event => {
    let value = {};
    switch (event.target.value) {
      case '2':
        value = { cost: 'DESC' };
        break;
      case '3':
        value = { name: 'ASC' };
        break;
      case '4':
        value = { name: 'DESC' };
        break;
      default:
        value = { cost: 'ASC' };
    }
    this.props.onSortChanged({
      sort: value,
      item: parseInt(event.target.value, 10),
    });
  };

  render() {
    const { classes, select } = this.props;
    return (
      <NativeSelect
        className={classes.selectEmpty}
        value={select}
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
  select: PropTypes.number.isRequired,
};

export default withStyles(styles)(DropdownSortMenu);
