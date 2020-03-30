import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';

import Paths from './components/Paths';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import CategoryCards from './components/CategoryCards';
import AdvertiserCards from './components/AdvertiserCards';
import BusinessCards from './components/BusinessCards';
import { toggleMobile } from './store/actions/categories';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(1)
  },
  logo: {
    maxHeight: '20px'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  fullContent: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  //necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

const App = props => {
  const cats = useSelector(state => state.cats);
  const dispatch = useDispatch();
  const { tertiary } = cats;
  const classes = useStyles();

  const handleDrawerToggle = () => {
    dispatch(toggleMobile());
  };

  return (
    <div className={classes.root}>
      <Paths />
      <AppBar position='fixed' color='secondary' className={classes.appBar}>
        <Menu />
      </AppBar>
      {tertiary !== '' ? (
        <>
          <nav className={classes.drawer} aria-label='Secondary Navigation'>
            <Hidden smUp implementation='css'>
              <Drawer
                variant='temporary'
                anchor='right'
                open={cats.mobileOpen}
                onClose={handleDrawerToggle}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}
              >
                <div className={classes.toolbar} />
                <Sidebar />
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation='css'>
              <Drawer
                variant='permanent'
                open
                classes={{ paper: classes.drawerPaper }}
              >
                <div className={classes.toolbar} />
                <Sidebar />
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <AdvertiserCards />
            <BusinessCards />
          </main>
        </>
      ) : (
        <main className={classes.fullContent}>
          <div className={classes.toolbar} />
          <CategoryCards />
        </main>
      )}
    </div>
  );
};

export default App;
