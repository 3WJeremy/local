import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Advertiser from './Advertiser';
import advertisers from '../constants/advertisers';
import categories from '../constants/categories';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const AdvertiserCards = (props) => {
  const classes = useStyles();
  const cats = useSelector((state) => state.cats);
  const { primary, secondary, tertiary } = cats;
  const [yelpCategories, setYelpCategories] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (tertiary !== '') {
      const tertiaryCategory = categories
        .find((c) => c.id === primary)
        .secondary.find((c) => c.id === secondary)
        .tertiary.find((c) => c.id === tertiary);
      if (tertiaryCategory && tertiaryCategory.yelp) {
        setYelpCategories(tertiaryCategory.yelp);
      } else {
        setYelpCategories([]);
      }
    } else {
      setYelpCategories([]);
    }
  }, [primary, secondary, tertiary]);

  useEffect(() => {
    if (yelpCategories.length > 0) {
      const intersection = advertisers.filter((ad) => {
        let shouldIncludeAd = false;
        ad.yelp.forEach((cat) => {
          if (yelpCategories.includes(cat)) {
            shouldIncludeAd = true;
          }
        });
        return shouldIncludeAd;
      });

      setAds(intersection);
    } else {
      setAds([]);
    }
  }, [yelpCategories]);

  return (
    <div className={classes.root}>
      {tertiary !== '' && ads.map((a) => <Advertiser key={a.id} {...a} />)}
    </div>
  );
};

export default AdvertiserCards;
