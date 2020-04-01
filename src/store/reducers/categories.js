import * as actions from '../actions/categories';

const initialState = {
  primary: 'wealth',
  secondary: '',
  tertiary: '',
  page: 1,
  mobileOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_PATHS:
      return {
        ...state,
        primary: action.payload.primary,
        secondary: action.payload.secondary,
        tertiary: action.payload.tertiary,
        page: action.payload.page
      };
    case actions.TOGGLE_MOBILE:
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      };
    case actions.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case actions.PREVIOUS_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
};

export default reducer;
