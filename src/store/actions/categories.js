export const UPDATE_PATHS = 'UPDATE_PATHS';

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
