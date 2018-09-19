module.exports = theme => ({
  card: {
    minWidth: 300,
    minHeight: 300,
  },
  media: {
    height: 100,
    width: 100,
    marginLeft: 100,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
});
