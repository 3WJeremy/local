import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import * as catActions from '../store/actions/categories';
import settings from '../constants/settings';
import categories from '../constants/categories';

const Paths = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;

  useEffect(() => {
    const setPaths = (p = '', s = '', t = '', page = 1) => {
      dispatch(catActions.updatePaths(p, s, t, page));
    };

    if (pathname === '') {
      setPaths();
    } else {
      const path = pathname.replace(settings.prependPath, '');
      const paths = path.split('/').filter(path => path !== '');
      if (paths.length === 4) {
        setPaths(paths[0], paths[1], paths[2], paths[3]);
      } else if (paths.length === 3) {
        setPaths(paths[0], paths[1], paths[2]);
      } else if (paths.length === 2) {
        const firstChildId = categories
          .find(p => p.id === paths[0])
          .secondary.find(s => s.id === paths[1]).tertiary[0].id;
        history.push(`/${paths[0]}/${paths[1]}/${firstChildId}`);
        // setPaths(paths[0], paths[1], firstChildId);
      } else if (paths.length === 1) {
        setPaths(paths[0]);
      } else {
        history.push('/wealth');
        // setPaths();
      }
    }
  }, [pathname, dispatch, history]);

  return <></>;
};

export default Paths;
