import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Icon from '@material-ui/icons/ImportantDevices';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Link from '../../components/Link';

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

class Category extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
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
        <CardActions className={this.props.classes.cardActions}>
          <Button size="small" color="primary">
            <Link to={`/subcategories/${this.props.id}`}> Show all </Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(Category);
