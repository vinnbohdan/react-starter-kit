module.exports = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    // marginTop: theme.spacing.unit * 8,
    // borderTop: `1px solid ${theme.palette.divider}`,
    // padding: `${theme.spacing.unit * 6}px 0`,
  },
});
