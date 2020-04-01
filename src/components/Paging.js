import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import settings from '../constants/settings';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0)
  },
  card: {
    width: '100%',
    textAlign: 'center'
  }
}));

const Paging = props => {
  const classes = useStyles();
  const isNextDisabled =
    props.page * settings.resultsPerPage >= props.total ? true : false;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Button
            key='backButton'
            onClick={() => props.onPrevious()}
            disabled={props.page === 1 ? true : false}
          >
            <ArrowBackIosIcon /> Previous
          </Button>
          <Button
            key='nextButton'
            onClick={() => props.onNext()}
            disabled={isNextDisabled}
          >
            Next <ArrowForwardIosIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Paging;
