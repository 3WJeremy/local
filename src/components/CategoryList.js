import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MUIExpansionPanel from '@material-ui/core/ExpansionPanel';
import MUIExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MUIExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
  root: {
    '&$expanded': {
      margin: '0 auto'
    }
  },
  expanded: {}
})(MUIExpansionPanel);

const ExpansionPanelSummary = withStyles({
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MUIExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: '0 auto'
  }
}))(MUIExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto'
  },
  summary: {
    margin: theme.spacing(1, 0)
  }
}));

const CategoryList = ({ title, categories, sticky, selected, path }) => {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = useState(sticky);

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
        >
          <Typography className={classes.summary}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {expanded && (
            <List component='div' aria-labelledby='nested-list-subheader'>
              {categories.map(cat => (
                <ListItem
                  button
                  key={cat.id}
                  selected={cat.id === selected}
                  onClick={() => history.push(`${path}/${cat.id}`)}
                  className={classes.item}
                >
                  <ListItemText primary={cat.title} />
                </ListItem>
              ))}
            </List>
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

CategoryList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array,
  sticky: PropTypes.bool,
  selected: PropTypes.string,
  path: PropTypes.string
};

export default CategoryList;
