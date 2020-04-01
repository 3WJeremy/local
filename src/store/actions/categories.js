export const UPDATE_PATHS = 'UPDATE_PATHS';
export const TOGGLE_MOBILE = 'TOGGLE_MOBILE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';

export const updatePaths = (p, s, t, pg) => {
  return {
    type: UPDATE_PATHS,
    payload: {
      primary: p,
      secondary: s,
      tertiary: t,
      page: pg
    }
  };
};

export const toggleMobile = () => {
  return { type: TOGGLE_MOBILE };
};

export const nextPage = () => {
  return { type: NEXT_PAGE };
};

export const previousPage = () => {
  return { type: PREVIOUS_PAGE };
};
