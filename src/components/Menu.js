import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

import logo from '../images/logo.png';
import { toggleMobile } from '../store/actions/categories';
import CategoryTabs from './CategoryTabs';
import settings from '../constants/settings';
const { title, additionalLocations } = settings;

const Input = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiSelect-icon': {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.secondary,
    color: '#FFF',
    border: 'none',
    fontSize: 24,
    padding: '0',
  },
}))(InputBase);

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

  const handleSiteSelection = (event) => {
    if (event.target.value !== 'current') {
      window.location.href = event.target.value;
    }
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
      <FormControl className={classes.margin}>
        <Select
          labelId='location'
          id='location'
          value='current'
          onChange={handleSiteSelection}
          input={<Input />}
        >
          <MenuItem key={title} value='current'>
            <em>{title}</em>
          </MenuItem>
          {additionalLocations.map((location) => (
            <MenuItem key={location.title} value={location.url}>
              {location.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <CategoryTabs />
      </div>
    </Toolbar>
  );
};

export default Menu;
