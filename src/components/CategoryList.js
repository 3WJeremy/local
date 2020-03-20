import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
// import Drawer from '@material-ui/core/Drawer';
// import Divider from '@material-ui/core/Divider';

import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100vh'
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  }
  // drawer: {
  //   width: 240,
  //   flexShrink: 0
  // },
  // drawerPaper: {
  //   width: 240
  // },
  // toolbar: theme.mixins.toolbar
}));

const CategoryList = props => {
  const history = useHistory();
  const classes = useStyles();
  const cats = useSelector(state => state.cats);

  const handleClick = (_e, s, t) => {
    history.push(`/${cats.primary}/${s}/${t}`);
  };

  const jsxList = match => {
    const include = c => c.id === cats.secondary;
    const exclude = c => c.id !== cats.secondary;
    return (
      <>
        {categories
          .find(cat => cat.id === cats.primary)
          .secondary.filter(match ? include : exclude)
          .map(cat => (
            <li key={cat.id} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader color='primary'>{cat.title}</ListSubheader>
                {cat.tertiary.map(subCat => (
                  <ListItem
                    button
                    key={subCat.id}
                    selected={subCat.id === cats.tertiary}
                    onClick={e => handleClick(e, cat.id, subCat.id)}
                  >
                    <ListItemText primary={subCat.title} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
      </>
    );
  };

  // const jsxDrawer = match => {
  //   const include = c => c.id === cats.secondary;
  //   const exclude = c => c.id !== cats.secondary;
  //   return (
  //     <Drawer
  //       className={classes.drawer}
  //       variant='permanent'
  //       classes={{
  //         paper: classes.drawerPaper
  //       }}
  //     >
  //       <div className={classes.toolbar} />
  //       {categories
  //         .find(cat => cat.id === cats.primary)
  //         .secondary.filter(match ? include : exclude)
  //         .map(cat => (
  //           <>
  //             <List key={cat.id}>
  //               <ListSubheader color='primary'>{cat.title}</ListSubheader>
  //               {cat.tertiary.map(subCat => (
  //                 <ListItem
  //                   button
  //                   key={subCat.id}
  //                   selected={subCat.id === cats.tertiary}
  //                   onClick={e => handleClick(e, cat.id, subCat.id)}
  //                 >
  //                   <ListItemText primary={subCat.title} />
  //                 </ListItem>
  //               ))}
  //             </List>
  //             <Divider />
  //           </>
  //         ))}
  //     </Drawer>
  //   );
  // };

  return (
    <>
      {cats.secondary !== '' && (
        <List className={classes.root} subheader={<li />}>
          {jsxList(true)}
          {jsxList(false)}
        </List>
      )}
    </>
  );
};

export default CategoryList;
