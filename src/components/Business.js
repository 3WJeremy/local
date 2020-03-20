import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import StarRating from './StarRating';
import BusinessCardContent from './BusinessCardContent';

const useStyles = makeStyles(theme => ({
  root: {
    width: '300px',
    marginTop: '20px',
    textAlign: 'center',
    '& > span > span': {
      left: 0
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    // backgroundColor: red[500]
    backgroundColor: theme.palette.secondary.main
  },
  iconSpacer: {
    width: '40px'
  }
}));

const Business = props => {
  const classes = useStyles();
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const {
    // id,
    // alias,
    name,
    image_url,
    // is_closed,
    // url,
    review_count,
    // categories,
    rating,
    // coordinates,
    // transactions,
    // price,
    location,
    // phone,
    display_phone
    // distance
  } = props.data;
  // const { latitude, longitude } = coordinates;

  const title = (
    <Typography variant='body2' color='textSecondary' component='p'>
      <strong>{name}</strong>
    </Typography>
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
        title={title}
        subheader={<StarRating rating={rating} reviews={review_count} />}
      />
      {image_url && (
        <CardMedia className={classes.media} image={image_url} title={name} />
      )}
      <BusinessCardContent location={location} phone={display_phone} />
    </Card>
  );
};

export default Business;
