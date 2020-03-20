import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import categories from '../constants/categories';

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2)
  },
  cards: {
    flexGrow: 1
  }
}));

const CategoryTabs = props => {
  const classes = useStyles();
  const cats = useSelector(state => state.cats);
  const history = useHistory();

  const tabChangeHandler = (_evt, t) => {
    history.push(`${categories[t].id}`);
  };

  return (
    <>
      {cats.secondary === '' && (
        <div className={classes.root}>
          <Tabs
            value={categories.findIndex(c => c.id === cats.primary)}
            indicatorColor='primary'
            textColor='primary'
            onChange={tabChangeHandler}
            aria-label='Select a Category'
            centered={true}
          >
            {categories.map((cat, i) => {
              return <Tab key={i} label={cat.title} {...a11yProps(i)} />;
            })}
          </Tabs>
        </div>
      )}
    </>
  );
};

export default CategoryTabs;
