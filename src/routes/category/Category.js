import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Link from '../../components/Link';
import styles from './styles';

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
          <Button
            component={Link}
            to={`/subcategories/${this.props.id}`}
            size="small"
            color="primary"
          >
            Show all
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(Category);
