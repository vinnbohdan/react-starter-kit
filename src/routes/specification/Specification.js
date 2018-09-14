import React from 'react';
import PropTypes from 'prop-types';
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

  state = {
    isChecked: {},
  };

  componentDidMount() {
    const { getSpecifications, subcategoryId } = this.props;
    getSpecifications(subcategoryId);
  }
  componentWillUnmount() {
    const { resetSpecifications } = this.props;
    resetSpecifications();
  }

  handleChange = specValue => () => {
    // console.log('---');
    const isChecked = this.state.isChecked || {};
    isChecked[specValue] = !isChecked[specValue];
    this.setState({
      isChecked,
    });
    // console.log(this.state.isChecked);
  };

  render() {
    // console.log(this.state);
    const { classes } = this.props;
    return this.props.specifications.map(specName => (
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
                  onChange={this.handleChange(specValue)}
                  value={specValue}
                />
                {specValue}
              </div>
            ))}
          </FormGroup>
        </FormLabel>
      </div>
    ));
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
