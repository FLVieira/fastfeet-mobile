export function signInRequest(id, navigation) {
  return {
    type: '@user/SIGN_IN_REQUEST',
    payload: { id, navigation },
  };
}

export function signInSuccess(data) {
  return {
    type: '@user/SIGN_IN_SUCCESS',
    payload: { data },
  };
}

export function signInFailure() {
  return {
    type: '@user/SIGN_IN_FAILURE',
  };
}
