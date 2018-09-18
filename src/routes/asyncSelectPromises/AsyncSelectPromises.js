import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AsyncSelect from 'react-select/lib/Async';
import { buildQuery } from '../../helpers';
import history from '../../history';
import styles from './styles';

class AsyncSelectPromises extends Component<*, State> {
  static contextTypes = {
    fetch: PropTypes.func,
  };
  state = { value: null };
  getNames = inputValue => {
    const params = {
      // sort: '-createDate',
      page: 1,
      search: inputValue.trim(),
      // perPage: 10,
    };
    const query = buildQuery(params);

    return this.context
      .fetch(`/api/products/?${query}`, { method: 'GET' })
      .then(async res => {
        const resText = await res.text();
        const json = resText ? JSON.parse(resText) : [];
        if (res.status >= 400) {
          console.error(json);
          return [];
        }

        return json
          .map(item => ({
            id: item.id,
            name: item.name,
          }))
          .filter(i => i.name.toLowerCase().includes(inputValue.toLowerCase()));
      }, console.error)
      .catch(console.error);
  };
  handleInputChange = value => {
    // console.log(value);
    this.setState({
      value,
    });
    history.push(`/products/${value.id}`);
  };
  render() {
    const { classes } = this.props;
    return (
      <AsyncSelect
        cacheOptions
        defaultOptions
        onChange={this.handleInputChange}
        getOptionLabel={option => option.name}
        getOptionValue={option => option.id}
        value={this.state.value}
        loadOptions={this.getNames}
        className={classes.search}
        // theme={theme => ({
        //   ...theme,
        //   borderRadius: 100,
        //   width: 450,
        //   colors: {
        //     ...theme.colors,
        //     text: 'orangered',
        //     primary25: 'hotpink',
        //     primary: 'white',
        //   },
        // })}
      />
    );
  }
}
AsyncSelectPromises.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export default withStyles(styles)(AsyncSelectPromises);
