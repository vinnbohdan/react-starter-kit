import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '../../components/Link';
import styles from './styles';

class Product extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardMedia
          className={this.props.classes.media}
          image={this.props.icon}
          title={this.props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h3" noWrap>
            {this.props.name}
          </Typography>
          <Typography gutterBottom variant="subheading" component="h1">
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
