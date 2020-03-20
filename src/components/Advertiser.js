import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    borderRadius: 6
  },
  media: {
    width: 200,
    height: 200,
    flexShrink: 0
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      padding: theme.spacing(0, 2)
    }
  }
}));

const Advertiser = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            key={props.title}
            gutterBottom
            variant='h5'
            component='h2'
          >
            {props.title}
          </Typography>
          <div className={classes.row}>
            <div>
              {props.address && props.address.length > 0 && (
                <>
                  {props.address.map(line => (
                    <Typography key={line} variant='body1'>
                      {line}
                    </Typography>
                  ))}
                </>
              )}
              {props.phone && (
                <Typography key={props.phone} variant='body1'>
                  {props.phone}
                </Typography>
              )}
            </div>
            <div>
              {props.website && (
                <Typography key={props.website} variant='body1'>
                  <Link href={props.website}>
                    <LanguageIcon /> {props.website}
                  </Link>
                </Typography>
              )}
              {props.articles && props.articles.length > 0 && (
                <>
                  {props.articles.map(article => (
                    <Typography key={article} variant='body1'>
                      <Link href={article}>
                        <LinkIcon /> 3W Article
                      </Link>
                    </Typography>
                  ))}
                </>
              )}
            </div>
          </div>
        </CardContent>
        {props.logo && (
          <CardMedia
            className={classes.media}
            image={require(`../images/advertisers/${props.logo}`)}
            title={props.title}
          />
        )}
      </Card>
    </div>
  );
};

export default Advertiser;
