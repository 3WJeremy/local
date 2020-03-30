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
    justifyContent: 'space-between',
    '&::after': {
      content: ' ',
      flex: 'auto'
    }
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
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState({});

  useEffect(() => {
    if (tertiary !== '') {
      const tertiaryCategory = categories
        .find(c => c.id === primary)
        .secondary.find(c => c.id === secondary)
        .tertiary.find(c => c.id === tertiary);
      if (tertiaryCategory && tertiaryCategory.yelp) {
        setYelpCategories(tertiaryCategory.yelp);
      } else {
        setYelpCategories([]);
      }
      setLoading(true);
      setBusinesses([]);
      setTotal(0);
      setError(false);
    }
  }, [primary, secondary, tertiary]);

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();

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
          cancelToken: source.token,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
          },
          params: getParams(byDistance)
        })
        .then(result => {
          if (!unmounted) {
            const { total, businesses } = result.data;
            if (businesses.length > 0) {
              setTotal(total);
              setBusinesses(businesses);
              setLoading(false);
              setError(false);
            } else {
              if (byDistance) {
                setTotal(0);
                setBusinesses([]);
                setError({ message: 'No businesses available.' });
                setLoading(false);
              } else {
                getBusinesses(true);
              }
            }
          }
        })
        .catch(err => {
          if (!unmounted) {
            setTotal(0);
            setBusinesses([]);
            setError(err);
            setLoading(false);
          }
        });
    };

    if (yelpCategories.length > 0) {
      getBusinesses();
    }

    return () => {
      unmounted = true;
      source.cancel('Canceling in cleanup');
    };
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
            </div>
            {total > 0 && (
              <Paging
                onPrevious={previousPageHandler}
                onNext={nextPageHandler}
                page={page}
                total={total}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BusinessCards;
