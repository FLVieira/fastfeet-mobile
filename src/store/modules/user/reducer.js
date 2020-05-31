import produce from 'immer';

const INITIAL_STATE = {
  profile: {},
  loading: false,
  isLoggedIn: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.data;
        draft.isLoggedIn = true;
        draft.loading = false;
        break;
      }
      case '@user/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/SIGN_OUT': {
        draft.isLoggedIn = false;
        draft.profile = {};
        break;
      }
      default:
    }
  });
}
