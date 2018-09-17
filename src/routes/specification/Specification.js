import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import * as specificationsActions from '../../actions/specifications';
import styles from './styles';

class Specification extends React.Component {
  static propTypes = {
    isCheckedValue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    checkedValue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    subcategoryId: PropTypes.number.isRequired,
    specifications: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    onFilterChange: PropTypes.func.isRequired,
    getSpecifications: PropTypes.func.isRequired,
    resetSpecifications: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  static contextTypes = {
    fetch: PropTypes.func,
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
    const checked = this.props.checkedValue || {};
    const specValueArray = this.props.checkedValue[specName] || [];
    const isChecked = this.props.isCheckedValue || {};
    isChecked[specValue] = !isChecked[specValue];
    if (isChecked[specValue]) {
      specValueArray.push(specValue);
      checked[specName] = specValueArray;
    } else {
      _.pull(specValueArray, specValue);
      if (_.isEmpty(specValueArray)) {
        _.unset(checked, specName);
      } else {
        checked[specName] = specValueArray;
      }
    }
    const params = {};
    params.filter = checked || {};
    params.page = 1;
    params.isChecked = isChecked;
    this.props.onFilterChange(params);
  };

  render() {
    const { classes, specifications } = this.props;
    return (
      <React.Fragment>
        {specifications.map(specName => (
          <div key={specName.key} className={classes.formControl}>
            <FormLabel component="legend">
              {specName.key}
              <FormGroup row>
                {specName.value.map(specValue => (
                  <div key={specValue}>
                    <Checkbox
                      color="primary"
                      checked={this.props.isCheckedValue[specValue] || false}
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
      </React.Fragment>
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
