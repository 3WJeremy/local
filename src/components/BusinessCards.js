import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Business from './Business';
import Paging from './Paging';

import categories from '../constants/categories';
import settings from '../constants/settings';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '&::after': {
      content: ' ',
      flex: 'auto',
    },
  },
  cols: {
    display: 'flex',
    flexDirection: 'column',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const BusinessCards = (props) => {
  const classes = useStyles();
  const cats = useSelector((state) => state.cats);
  const { primary, secondary, tertiary, page } = cats;
  const history = useHistory();
  const [yelpCategories, setYelpCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(-1);
  const [error, setError] = useState({});
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (tertiary !== '') {
      const tertiaryCategory = categories
        .find((c) => c.id === primary)
        .secondary.find((c) => c.id === secondary)
        .tertiary.find((c) => c.id === tertiary);
      if (tertiaryCategory && tertiaryCategory.yelp) {
        setYelpCategories(tertiaryCategory.yelp);
        setTerm(tertiaryCategory.title);
      } else {
        setYelpCategories([]);
        setTerm('');
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

    const getBusinesses = async (byDistance = false) => {
      const proxyUrl = settings.proxy + settings.yelpSearchUrl;

      await axios
        .get(proxyUrl, {
          cancelToken: source.token,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
          },
          params: {
            term: term,
            latitude: settings.latitude,
            longitude: settings.longitude,
            radius: settings.radius,
            categories: yelpCategories.join(','),
            locale: 'en_US',
            limit: settings.resultsPerPage,
            offset: offset,
            sort_by: 'distance',
          },
        })
        .then((result) => {
          if (!unmounted) {
            const { total, businesses } = result.data;
            if (businesses.length > 0) {
              setTotal(total);
              setBusinesses(businesses);
              setLoading(false);
              setError(false);
            } else {
              setTotal(0);
              setBusinesses([]);
              setError({ message: 'No businesses available.' });
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          if (!unmounted) {
            setTotal(0);
            setBusinesses([]);
            setError(err);
            setLoading(false);
          }
        });
    };

    if (yelpCategories.length > 0 && offset > -1) {
      getBusinesses();
    }

    return () => {
      unmounted = true;
      source.cancel('Canceling in cleanup');
    };
  }, [yelpCategories, term, offset]);

  useEffect(() => {
    if (page > 0) {
      // (page - 1) because first page doesn't have an offset
      setOffset(settings.resultsPerPage * (page - 1));
    }
  }, [page]);

  const previousPageHandler = () => {
    const pageInt = parseInt(page);
    if (pageInt > 2) {
      const pageNumber = pageInt - 1;
      history.push(`/${primary}/${secondary}/${tertiary}/${pageNumber}`);
    } else if (pageInt === 2) {
      history.push(`/${primary}/${secondary}/${tertiary}`);
    }
  };

  const nextPageHandler = () => {
    const pageInt = parseInt(page);
    const totalInt = parseInt(total);
    if (pageInt * settings.resultsPerPage < totalInt) {
      const pageNumber = pageInt + 1;
      history.push(`/${primary}/${secondary}/${tertiary}/${pageNumber}`);
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
          {loading && (
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          )}
          <div className={classes.cols}>
            <div className={classes.root}>
              {businesses.map((b) => (
                <Business key={b.id} data={b} />
              ))}
            </div>
            {(page > 1 ||
              (page === 1 &&
                businesses.length === settings.resultsPerPage)) && (
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
