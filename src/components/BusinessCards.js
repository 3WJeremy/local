import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Business from './Business';
import Paging from './Paging';

import categories from '../constants/categories';
import settings from '../constants/settings';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  cols: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const BusinessCards = props => {
  const classes = useStyles();
  const cats = useSelector(state => state.cats);
  const { primary, secondary, tertiary } = cats;
  const [yelpCategories, setYelpCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [businesses, setBusinesses] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState({});

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
    const getParams = (byDistance = false) => {
      let params = {
        categories: yelpCategories.join(','),
        locale: 'en_US',
        limit: settings.resultsPerPage,
        offset: offset
      };
      if (byDistance) {
        return {
          ...params,
          latitude: settings.latitude,
          longitude: settings.longitude,
          radius: settings.radius,
          sort_by: 'distance'
        };
      }
      return {
        ...params,
        location: settings.location,
        sort_by: 'distance'
      };
    };

    const getBusinesses = async (byDistance = false) => {
      const proxyUrl = settings.proxy + settings.yelpSearchUrl;
      await axios
        .get(proxyUrl, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
          },
          params: getParams(byDistance)
        })
        .then(result => {
          const { total, businesses } = result.data;
          if (businesses.length > 0) {
            setTotal(total);
            setBusinesses(businesses);
            setLoading(false);
          } else {
            if (byDistance) {
              setBusinesses([]);
              setError({ message: 'No businesses available.' });
              setLoading(false);
            } else {
              getBusinesses(true);
            }
          }
        })
        .catch(err => {
          setError(err);
        });
    };

    if (yelpCategories.length > 0) {
      getBusinesses();
    }
  }, [yelpCategories, offset]);

  useEffect(() => {
    if (page > 0) {
      setOffset(settings.resultsPerPage * page);
    }
  }, [page]);

  const previousPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPageHandler = () => {
    if (
      settings.resultsPerPage * (page + 1) <
      total + settings.resultsPerPage - 1
    ) {
      setPage(page + 1);
    }
  };

  return (
    <>
      {tertiary !== '' && (
        <>
          {error && (
            <Typography variant='body2' gutterBottom>
              {error.message}
            </Typography>
          )}
          {loading && <CircularProgress />}
          <div className={classes.cols}>
            <div className={classes.root}>
              {businesses.map(b => (
                <Business key={b.id} data={b} />
              ))}
              <Paging
                onPrevious={previousPageHandler}
                onNext={nextPageHandler}
                page={page}
                total={total}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BusinessCards;
