import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Icon from '@material-ui/icons/ImportantDevices';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
});

class Product extends React.Component {
  static propTypes = {
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
          <Button size="small" color="primary">
            Details
          </Button>
          <Button size="small" color="primary">
            Buy
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(Product);
