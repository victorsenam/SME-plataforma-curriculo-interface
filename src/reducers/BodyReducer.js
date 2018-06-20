import BodyActions from '../actions/BodyActions';

const initialState = {
  hasPopup: false,
  isHome: false,
  isLoading: false,
};

function BodyReducer(state = initialState, action) {
  switch (action.type) {
    case BodyActions.ENTER_HOME:
      return Object.assign({}, state, { isHome: true });

    case BodyActions.EXIT_HOME:
      return Object.assign({}, state, { isHome: false });

    case BodyActions.HIDE_LOADING:
      return Object.assign({}, state, { isLoading: false });

    case BodyActions.SHOW_LOADING:
      return Object.assign({}, state, { isLoading: true });

    case BodyActions.HIDE_POPUP:
      return Object.assign({}, state, { hasPopup: false });

    case BodyActions.SHOW_POPUP:
      return Object.assign({}, state, { hasPopup: true });

    default:
      return initialState;
  }
}

export default BodyReducer;