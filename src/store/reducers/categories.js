import * as actions from '../actions/categories';

const initialState = {
  primary: 'wealth',
  secondary: '',
  tertiary: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_PATHS:
      return {
        ...state,
        primary: action.payload.primary,
        secondary: action.payload.secondary,
        tertiary: action.payload.tertiary
      };
    default:
      return state;
  }
};

export default reducer;
