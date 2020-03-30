import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
    backgrounColor: theme.palette.secondary,
    marginTop: theme.spacing(2)
  },
  cards: {
    flexGrow: 1
  }
}));

const StyledTab = withStyles(theme => ({
  root: {
    '&:hover': {
      color: '#be9b4d',
      opacity: 1
    },
    '&$selected': {
      color: theme.palette.primary
    },
    '&:focus': {
      color: '#be9b4d'
    }
  },
  selected: {}
}))(props => <Tab {...props} />);

const CategoryTabs = props => {
  const classes = useStyles();
  const cats = useSelector(state => state.cats);
  const history = useHistory();

  const tabChangeHandler = (_evt, t) => {
    history.push(`/${categories[t].id}`);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={categories.findIndex(c => c.id === cats.primary)}
        indicatorColor='primary'
        onChange={tabChangeHandler}
        aria-label='Select a Category'
        centered={true}
      >
        {categories.map((cat, i) => {
          return <StyledTab key={i} label={cat.title} {...a11yProps(i)} />;
        })}
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
