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
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
    borderRadius: 6,
  },
  media: {
    width: 200,
    height: 200,
    flexShrink: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    padding: theme.spacing(0, 2),
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Advertiser = (props) => {
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
            <div className={classes.info}>
              {props.address && props.address.length > 0 && (
                <>
                  {props.address.map((line) => (
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
            <div className={classes.col}>
              {props.website && (
                <div>
                  <Typography key={props.website} variant='body1'>
                    <Link href={props.website} className={classes.link}>
                      <LanguageIcon /> {props.website}
                    </Link>
                  </Typography>
                </div>
              )}
              {props.articles && props.articles.length > 0 && (
                <div>
                  {props.articles.map((article) => (
                    <Typography key={article} variant='body1'>
                      <Link href={article} className={classes.link}>
                        <LinkIcon /> 3W Article
                      </Link>
                    </Typography>
                  ))}
                </div>
              )}
              {props.accolades && props.accolades.length > 0 && (
                <div>
                  {props.accolades.map((accolade) => (
                    <Typography
                      key={accolade}
                      variant='body1'
                      className={classes.iconContainer}
                    >
                      <EmojiEventsIcon /> {accolade}
                    </Typography>
                  ))}
                </div>
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
