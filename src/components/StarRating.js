import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rating: {
    left: 0,
    marginTop: theme.spacing(1)
  }
}));

const StarRating = props => {
  const classes = useStyles();

  let stars = [];

  for (let i = 0; i < Math.floor(props.rating); i++) {
    stars.push(<StarIcon key={i + 1} color='primary' />);
  }
  if (props.rating % 1 !== 0) {
    stars.push(<StarHalfIcon key={Math.ceil(props.rating)} color='primary' />);
  }
  for (let i = 5; i > Math.ceil(props.rating); i--) {
    stars.push(<StarBorderIcon key={i} color='primary' />);
  }
  return (
    <div className={classes.root}>
      {stars.map(icon => icon)}{' '}
      {props.reviews > 0 && (
        <Typography variant='body2' color='textSecondary' component='span'>
          ({props.reviews})
        </Typography>
      )}
    </div>
  );
};

export default StarRating;
