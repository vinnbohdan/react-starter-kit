import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    isChecked: false,
  };

  componentDidMount() {
    const { getSpecifications, subcategoryId } = this.props;
    getSpecifications(subcategoryId);
  }
  componentWillUnmount() {
    const { resetSpecifications } = this.props;
    resetSpecifications();
  }

  handleChange = () => {
    this.setState(state => ({
      isChecked: !state.isChecked,
    }));
    // console.log(this.state.isChecked);
  };

  render() {
    const { classes } = this.props;
    return this.props.specifications.map(specName => (
      <FormControl
        key={specName.key}
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel component="legend">{specName.key}</FormLabel>
        <FormGroup>
          {specName.value.map(specValue => (
            <FormControlLabel
              key={specValue}
              control={
                <Checkbox
                  checked={this.state.isChecked}
                  onChange={this.handleChange(specValue)}
                  value={specValue}
                />
              }
              label={specValue}
            />
          ))}
        </FormGroup>
        <FormHelperText>Select {specName.key}</FormHelperText>
      </FormControl>
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
