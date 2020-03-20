import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HomeCard from './HomeCard';
import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const CategoryCards = props => {
  const cats = useSelector(state => state.cats);
  const { primary, secondary } = cats;
  const classes = useStyles();
  const [secondaryCategories, setSecondaryCategories] = useState([]);

  useEffect(() => {
    if (primary !== '' && secondary === '') {
      const pCat = categories.find(c => c.id === primary);
      const sCats = pCat.secondary.map(c => {
        return {
          id: c.id,
          title: c.title,
          image: c.image
        };
      });
      setSecondaryCategories(sCats);
    } else {
      setSecondaryCategories([]);
    }
  }, [primary, secondary]);

  return (
    <div className={classes.root}>
      {secondaryCategories.length > 0 && (
        <Grid container>
          <Grid key='space1' item xs={2}></Grid>
          <Grid key='content' item xs={8}>
            <Grid container>
              {secondaryCategories.map(c => (
                <Grid key={c.id} item xs={4}>
                  <HomeCard
                    p={primary}
                    s={c.id}
                    title={c.title}
                    image={c.image}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid key='space2' item xs={2}></Grid>
        </Grid>
      )}
    </div>
  );
};

export default CategoryCards;
