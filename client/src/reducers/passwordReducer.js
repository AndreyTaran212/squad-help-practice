import ACTION from '../actions/actionTypes';


const initialState = {
  isFetching: false,
  error: null,
  passwordForm: null,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ACTION.RECOVER_PASSWORD_ACTION: {
    return {
      ...state,
      isFetching: true,
    };
  }
  case ACTION.RECOVER_PASSWORD_SUCCESS: {
    return {
      ...state,
      passwordForm: action.data,
      isFetching: false,
    };
  }
  case ACTION.UPDATE_PASSWORD_ERROR: {
    const { error } = action;
    return {
      ...state,
      error,
      isFetching: false,
    };
  }
  case ACTION.UPDATE_PASSWORD_SUCCESS: {
    const { data } = action;
    return {
      ...state,
      data,
      isFetching: false,
    };
  }
  case ACTION.UPDATE_PASSWORD: {
    return {
      ...state,
      isFetching: true,
    };
  }
  case ACTION.CLEAR_PASSWORD_STATE: {
    return initialState;
  }
  default:
    return state;
  }
}
