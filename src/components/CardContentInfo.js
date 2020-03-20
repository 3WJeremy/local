import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const CardContentInfo = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {props.icon && props.icon}
        </Grid>
        <Grid item xs={10}>
          {Array.isArray(props.data) ? (
            props.data.map(line => (
              <Typography
                key={line}
                variant='body2'
                color='textSecondary'
                gutterBottom
              >
                {line}
              </Typography>
            ))
          ) : (
            <Typography variant='body2' color='textSecondary' gutterBottom>
              {props.data}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CardContentInfo;
