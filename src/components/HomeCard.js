import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    margin: theme.spacing(2, 1)
  },
  media: {
    width: 300,
    height: 200
  }
}));

const HomeCard = props => {
  const history = useHistory();
  const classes = useStyles();

  const { p, s, title, image } = props;

  const clickHandler = _event => {
    history.push(`${p}/${s}`);
  };

  return (
    <div className={classes.root}>
      <Card onClick={clickHandler}>
        <CardActionArea>
          {image && (
            <CardMedia
              className={classes.media}
              image={require(`../images/categories/${image}`)}
              title={title}
            />
          )}
          <CardContent>
            <Typography
              variant='button'
              display='block'
              align='center'
              color='primary'
            >
              {title.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default HomeCard;
