import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import CategoryList from './CategoryList';
import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0)
  },
  item: {
    paddingLeft: theme.spacing(4)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Sidebar = props => {
  const classes = useStyles();
  const cats = useSelector(state => state.cats);
  const { primary, secondary, tertiary } = cats;
  const topRef = useRef();
  const [primaryCategory, setPrimaryCategory] = useState({});
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setPrimaryCategory(categories.find(c => c.id === primary));
    setDisplay(true);
  }, [primary]);

  useEffect(() => {
    const forceRefresh = async () => {
      setDisplay(false);
      setTimeout(() => {
        setDisplay(true);
      }, 100);
    };
    forceRefresh();
  }, [secondary]);

  return (
    <div ref={topRef} className={classes.root}>
      {display ? (
        <>
          {primaryCategory.secondary &&
            primaryCategory.secondary.map(cat => (
              <CategoryList
                key={cat.id}
                title={cat.title}
                categories={cat.tertiary}
                sticky={cat.id === secondary ? true : false}
                selected={cat.id === secondary ? tertiary : ''}
                path={`/${primary}/${cat.id}`}
              />
            ))}
        </>
      ) : (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
