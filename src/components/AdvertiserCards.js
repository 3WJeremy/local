import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Advertiser from './Advertiser';

import advertisers from '../constants/advertisers';
import categories from '../constants/categories';

const AdvertiserCards = props => {
  const cats = useSelector(state => state.cats);
  const { primary, secondary, tertiary } = cats;
  const [yelpCategories, setYelpCategories] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (tertiary !== '') {
      const yelpCats = categories
        .find(c => c.id === primary)
        .secondary.find(c => c.id === secondary)
        .tertiary.find(c => c.id === tertiary).yelp;
      setYelpCategories(yelpCats);
    }
  }, [primary, secondary, tertiary]);

  useEffect(() => {
    if (yelpCategories.length > 0) {
      const newAds = advertisers.filter(a =>
        a.categories.some(c => yelpCategories.includes(c))
      );
      setAds(newAds);
    } else {
      setAds([]);
    }
  }, [yelpCategories]);

  return (
    <>
      {ads.map(a => (
        <Advertiser key={a.id} {...a} />
      ))}
    </>
  );
};

export default AdvertiserCards;
