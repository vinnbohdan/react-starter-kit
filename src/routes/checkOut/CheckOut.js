import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'redux-form-material-ui';
import {
  Field,
  reduxForm,
  // SubmissionError,
  propTypes as reduxFormPropTypes,
} from 'redux-form';
import validate from './validate';
import styles from './style';

class Checkout extends React.Component {
  static propTypes = {
    ...reduxFormPropTypes,
  };
  handleSubmit = () => {
    // console.log('---data', data);
    // return this.context
    //   .fetch('/api/auth/login', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //   })
    //   .catch(err => {
    //     throw new SubmissionError({ _error: err && err.message });
    //   })
    //   .then(res =>
    //     res.json().then(resJson => {
    //       if (!res.ok) {
    //         if (resJson.message) {
    //           throw new SubmissionError({ _error: resJson.message });
    //         }
    //         throw new SubmissionError(resJson);
    //       }
    //       return resJson;
    //     }),
    //   )
    //   .then(token => {
    //     cookies.set('token', token.token, { path: '/' }); we save token in cookies instead of local storage for correct routing with server side server to prevent log out when user goes from one page to another
    //     history.push('/');
    //   });
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit, submitting, error } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="display1" align="center">
              Checkout
            </Typography>
            <React.Fragment>
              <React.Fragment>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        name="firstName"
                        type="text"
                        label="First name"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        name="lastName"
                        type="text"
                        label="Last name"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        required
                        name="address"
                        type="text"
                        label="Address line"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="email"
                        type="email"
                        label="Email"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        name="city"
                        type="text"
                        label="City"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        name="phoneNumber"
                        type="phoneNumber"
                        label="Phone number"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        name="zip"
                        type="text"
                        label="Zip / Postal code"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        name="country"
                        type="text"
                        label="Country"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        required
                        name="cardNumber"
                        type="text"
                        label="Card number"
                        margin="dense"
                        component={TextField}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </form>
                <div className={classes.buttons}>
                  {error && (
                    <Typography gutterBottom color="error">
                      {error}
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    disabled={submitting}
                  >
                    Place order
                  </Button>
                </div>
              </React.Fragment>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const createReduxForm = reduxForm({
  form: 'loginForm',
  validate,
});

export default createReduxForm(withStyles(styles)(Checkout));
