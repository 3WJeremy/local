import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

const Sidebar = props => {
  const classes = useStyles();
  const cats = useSelector(state => state.cats);
  const { primary, secondary, tertiary } = cats;
  const [primaryCategory, setPrimaryCategory] = useState({});
  const topRef = useRef();

  useEffect(() => {
    setPrimaryCategory(categories.find(c => c.id === primary));
  }, [primary]);

  return (
    <div ref={topRef} className={classes.root}>
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
    </div>
  );
};

export default Sidebar;
