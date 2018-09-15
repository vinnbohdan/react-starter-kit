import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import * as specificationsActions from '../../actions/specifications';
import styles from './styles';
import { objectToQueryString } from '../../helpers';

class Specification extends React.Component {
  static propTypes = {
    subcategoryId: PropTypes.number.isRequired,
    specifications: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    getSpecifications: PropTypes.func.isRequired,
    resetSpecifications: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  static contextTypes = {
    fetch: PropTypes.func,
  };

  state = {
    isChecked: {},
    checked: {},
  };

  componentDidMount() {
    const { getSpecifications, subcategoryId } = this.props;
    getSpecifications(subcategoryId);
  }
  componentWillUnmount() {
    const { resetSpecifications } = this.props;
    resetSpecifications();
  }

  handleChange = (specName, specValue) => () => {
    const checked = this.state.checked || {};
    const specValueArray = this.state.checked[specName] || [];
    const isChecked = this.state.isChecked || {};
    isChecked[specValue] = !isChecked[specValue];
    if (isChecked[specValue]) {
      specValueArray.push(specValue);
      checked[specName] = specValueArray;
    } else {
      _.pull(specValueArray, specValue);
      checked[specName] = specValueArray;
    }
    this.setState({
      isChecked,
      checked,
    });
  };

  handleClickApply = () => {
    const params = this.state.checked || {};
    params.page = 1;
    // console.log(params);
    const query = objectToQueryString(params);
    // console.log(query);

    // return this.context
    //   .fetch(`/api/products/?${query}`, { method: 'GET' })
    //   .then(async res => {
    //     const resText = await res.text();
    //     const json = resText ? JSON.parse(resText) : [];
    //     if (res.status >= 400) {
    //       console.error(json);
    //       return [];
    //     }
    //
    //     return json
    //       .map(item => ({
    //         id: item.id,
    //         name: item.name,
    //       }))
    //       .filter(i => i.name.toLowerCase().includes(inputValue.toLowerCase()));
    //   }, console.error)
    //   .catch(console.error);
  };
  handleClickReset = () => {
    const checked = {};
    const isChecked = {};
    this.setState({
      isChecked,
      checked,
    });
    // console.log(this.state);
  };
  render() {
    // console.log(this.state);
    const { classes, specifications } = this.props;
    return (
      <div>
        {specifications.map(specName => (
          <div key={specName.key} className={classes.formControl}>
            <FormLabel component="legend">
              {specName.key}
              <FormGroup row>
                {specName.value.map(specValue => (
                  <div key={specValue}>
                    <Checkbox
                      color="primary"
                      checked={this.state.isChecked[specValue] || false}
                      name={specValue}
                      onChange={this.handleChange(specName.key, specValue)}
                      value={specValue}
                    />
                    {specValue}
                  </div>
                ))}
              </FormGroup>
            </FormLabel>
          </div>
        ))}
        <Button
          variant="contained"
          className={classes.button}
          onClick={this.handleClickApply}
        >
          Apply
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={this.handleClickReset}
        >
          Reset
        </Button>
      </div>
    );
  }
}

const connectRedux = connect(
  state => ({
    specifications: state.specifications.items,
    loadingSpecifications: state.specifications.loading,
    total: state.specifications.total,
    error: state.specifications.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...specificationsActions,
      },
      dispatch,
    ),
);
export default connectRedux(withStyles(styles)(Specification));
