import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import logo from '../images/logo.png';
import { toggleMobile } from '../store/actions/categories';
import CategoryTabs from './CategoryTabs';
import settings from '../constants/settings';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logo: {
    maxHeight: '50px',
  },
}));

const Menu = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleMobile());
  };

  return (
    <Toolbar className={classes.toolbar}>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <img src={logo} className={classes.logo} alt='Logo' />
      <Typography variant='h4'>{settings.title}</Typography>
      <div>
        <CategoryTabs />
      </div>
    </Toolbar>
  );
};

export default Menu;
