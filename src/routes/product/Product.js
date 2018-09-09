import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Link from '../../components/Link';
import styles from './styles';

class Product extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardHeader
          title={this.props.name}
          titleTypographyProps={{ align: 'center' }}
          className={this.props.classes.cardHeader}
        />
        <CardContent className={this.props.classes.cardPricing}>
          <Typography gutterBottom variant="headline" component="h1">
            {this.props.cost} UAH
          </Typography>
        </CardContent>
        <CardActions className={this.props.classes.cardActions}>
          <Button
            component={Link}
            to={`/products/${this.props.id}`}
            size="small"
            color="primary"
          >
            Details
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(Product);
