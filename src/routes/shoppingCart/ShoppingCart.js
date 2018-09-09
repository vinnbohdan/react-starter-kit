// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import PropTypes from 'prop-types';
//
// export default class ShoppingCart extends React.Component {
//   static propTypes = {
//     open: PropTypes.bool.isRequired, // eslint-disable-line react/forbid-prop-types
//   };
//   state = {
//     open: false,
//   };
//
//   handleClose = () => {
//     this.setState({ open: false });
//   };
//
//   render() {
//     const { open } = this.state;
//     return (
//       <div>
//         <Dialog
//           open={open}
//           onClose={this.handleClose}
//           aria-labelledby="form-dialog-title"
//         >
//           <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               To subscribe to this website, please enter your email address
//               here. We will send updates occasionally.
//             </DialogContentText>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               label="Email Address"
//               type="email"
//               fullWidth
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={this.handleClose} color="primary">
//               Subscribe
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }
