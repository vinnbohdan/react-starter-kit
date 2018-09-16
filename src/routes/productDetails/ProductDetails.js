/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField";
import NumberFormat from 'react-number-format';
import * as productDetailsActions from '../../actions/productDetail';
import Link from '../../components/Link';
import styles from './styles';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="₴"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

class ProductDetails extends React.Component {
  static propTypes = {
    productId: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    productDetails: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getproductDetails: PropTypes.func.isRequired,
    resetproductDetails: PropTypes.func.isRequired,
  };
  state = {
    // newItem: "",
    list: JSON.parse(localStorage.getItem('list')) || [],
    itemsquantity: 1,
  };

  componentDidMount() {
    const { getproductDetails, productId } = this.props;
    getproductDetails(productId);
  }

  componentWillUnmount() {
    // clear hotProducts's state when leave page
    const { resetproductDetails } = this.props;
    resetproductDetails();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = (_id, _name, _price, _quantity) => ()=> {
    this.setState({ ordered: this.state.ordered + parseInt(_quantity, 10) });
    // create a new item
    const newItem = {id: _id, name: _name, price: _price, quantity: _quantity};
    // copy current list of items
    const list = [...this.state.list];
    // add the new item to the list
    // console.log('get list', list);
    let newElem = true;

    if (!Array.isArray(list) || !list.length) {
      list.push(newItem);
      // console.log('push to empty', this.state);
    } else {
      list.forEach( elem => {
        // console.log('elem.id', elem.id);
        if (elem.id === _id){
          elem.quantity = parseInt(_quantity, 10) + parseInt(elem.quantity, 10); // eslint-disable-line
          // console.log('changed quant', list);
          newElem = false;
        }
      });
      if(newElem){
        list.push(newItem);
        // console.log('added new', list);
      }
    }
    // update state with new list, reset the new item input
    this.setState({list}); // , newItem: ""
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("newItem", "");
    // console.log('this is:', localStorage);
  };

  render() {
      return (
      <div>
        {this.props.productDetails.map(item =>
        <GridList key={item.id}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Typography variant="title" color="textPrimary" gutterBottom>
              {item.name}
            </Typography>
          </GridListTile>
          <GridListTile>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" alt="" />
          </GridListTile>
          <GridListTile>
            <Typography variant="title" color="textPrimary" gutterBottom>
              {item.description}
            </Typography>
            <GridList>
              <GridListTile cols={2} style={{ height: 'auto' }}>
                <Typography variant="title" color="secondary" gutterBottom>
                  {item.quantity} items {item.status}
                </Typography>
              </GridListTile>
              <GridListTile>
                <TextField
                  id="number"
                  defaultValue={this.state.itemsquantity}
                  onChange={this.handleChange('itemsquantity')}
                  type="number"
                  className={this.props.classes.textField}
                  inputProps={{ min: "1", max: item.quantity, step: "1" }}
                  margin="dense"
                />
                <TextField
                  className={this.props.classes.formControl}
                  value={item.cost * this.state.itemsquantity}
                  onChange={this.handleChange('numberformat')}
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </GridListTile>
              <GridListTile>
                <Button
                  onClick={this.handleClick(item.id, item.name, item.cost, this.state.itemsquantity)}
                  size="large"
                  variant="contained"
                  color="secondary">
                    Add to cart
                </Button>
                <Button
                  component={Link}
                  to='/shoppingCart'
                  size="large"
                  variant="contained"
                  color="secondary">
                    View cart
                </Button>
              </GridListTile>
            </GridList>
          </GridListTile>
        </GridList>
        )}
      </div>
    );
  }
}

const connectRedux = connect(
  state => ({
    productDetails: state.productDetails.items,
    loadingproductDetails: state.productDetails.loading,
    total: state.productDetails.total,
    error: state.productDetails.error,
  }),
  dispatch =>
    bindActionCreators(
      {
        ...productDetailsActions,
      },
      dispatch,
    ),
);
export default connectRedux(withStyles(styles)(ProductDetails));
