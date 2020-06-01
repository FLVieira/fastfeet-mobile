import { all, takeLatest, call, put } from 'redux-saga/effects';
import Snackbar from 'react-native-snackbar';

import * as userActions from './actions';
import api from '~/services/api';

export function* signInRequest({ payload }) {
  try {
    const { id, navigation } = payload;
    const response = yield call(api.get, `/deliverymen/${id}`);
    yield put(userActions.signInSuccess(response.data));
    navigation.navigate('Dashboard');
  } catch (err) {
    Snackbar.show({
      text: 'Houve um erro no login, verifique seu id de cadastro!',
      duration: Snackbar.LENGTH_MEDIUM,
      backgroundColor: '#e50000',
    });
    yield put(userActions.signInFailure());
  }
}

export default all([takeLatest('@user/SIGN_IN_REQUEST', signInRequest)]);
