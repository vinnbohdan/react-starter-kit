import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import * as searchProductsActions from '../../actions/searchProducts';

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(
          (part, index) =>
            part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            ),
        )}
      </div>
    </MenuItem>
  );
}

const styles = theme => ({
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

class IntegrationAutosuggest extends React.Component {
  state = {
    single: '',
    suggestions: [],
  };
  componentDidMount() {
    const { getSearchProducts } = this.props;
    getSearchProducts();
  }
  componentWillUnmount() {
    // clear category's state when leave page
    const { resetSearchProducts } = this.props;
    resetSearchProducts();
  }
  getSuggestions = value => {
    const { getSearchProducts } = this.props;
    getSearchProducts(value);
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    return inputLength === 0
      ? []
      : this.props.searchProducts.filter(suggestion => {
          const keep =
            count < 5 &&
            suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;
          if (keep) {
            count += 1;
          }
          return keep;
        });
  };
  getSuggestionValue = suggestion => suggestion.name;
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };
  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };
  render() {
    const { classes } = this.props;
    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      renderSuggestion,
    };
    return (
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          placeholder: 'Search',
          value: this.state.single,
          onChange: this.handleChange('single'),
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  searchProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getSearchProducts: PropTypes.func.isRequired,
  resetSearchProducts: PropTypes.func.isRequired,
};
const connectRedux = connect(
  state => ({
    searchProducts: state.searchProducts.items,
    loadingSearchProducts: state.searchProducts.loading,
    total: state.searchProducts.total,
    error: state.searchProducts.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...searchProductsActions,
      },
      dispatch,
    ),
);
export default connectRedux(withStyles(styles)(IntegrationAutosuggest));
