export const UPDATE_PATHS = 'UPDATE_PATHS';
export const TOGGLE_MOBILE = 'TOGGLE_MOBILE';

export const updatePaths = (p, s, t) => {
  return {
    type: UPDATE_PATHS,
    payload: {
      primary: p,
      secondary: s,
      tertiary: t
    }
  };
};

export const toggleMobile = () => {
  return { type: TOGGLE_MOBILE };
};
