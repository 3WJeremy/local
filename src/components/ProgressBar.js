import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const ColorLinearProgress = withStyles(theme => ({
  colorPrimary: {
    backgroundColor: theme.palette.primary
  },
  barColorPrimary: {
    backgroundColor: theme.palette.primary.light
  }
}))(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(10)
  }
}));

const ProgressBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}
      ) : (
      <ColorLinearProgress className={classes.margin} />
      )}
    </div>
  );
};

export default ProgressBar;
