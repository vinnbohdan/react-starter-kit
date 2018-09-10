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

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

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

  componentDidMount() {
    const { getSpecifications, subcategoryId } = this.props;
    getSpecifications(subcategoryId);
    this.props.specifications.map(specName =>
      specName.value.map(specValue => this.setState({ [specValue]: false })),
    );
    // console.log(this.state);
  }
  componentWillUnmount() {
    // clear hotProducts's state when leave page
    const { resetSpecifications } = this.props;
    resetSpecifications();
  }

  handleChange = name => event => {
    // console.log(event.target.checked);
    // console.log(this.state);
    this.setState({ [name]: event.target.checked });
    // console.log(this.state);
    // console.log([name]);
  };

  render() {
    // console.log(this.state);
    const { classes } = this.props;
    // const { gilad, jason, antoine } = this.state;
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
                  checked={!!this.state[specValue]}
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
