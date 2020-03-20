import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Paths from './components/Paths';
import Menu from './components/Menu';
import CategoryTabs from './components/CategoryTabs';
import CategoryList from './components/CategoryList';
import CategoryCards from './components/CategoryCards';
import AdvertiserCards from './components/AdvertiserCards';
import BusinessCards from './components/BusinessCards';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
    maxWIdth: '100%'
  },
  cols: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const App = props => {
  const cats = useSelector(state => state.cats);
  const { tertiary } = cats;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paths />
      <Menu />
      <CategoryTabs />
      <CategoryCards />
      {tertiary !== '' && (
        <div className={classes.rows}>
          <CategoryList />
          <div className={classes.cols}>
            <AdvertiserCards />
            <BusinessCards />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
