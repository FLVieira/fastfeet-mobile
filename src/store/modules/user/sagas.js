import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import * as userActions from './actions';
import api from '~/services/api';

export function* signInRequest({ payload }) {
  try {
    const { id, navigation } = payload;
    const response = yield call(api.get, `/deliverymen/${id}`);
    yield put(userActions.signInSuccess(response.data));
    navigation.navigate('Dashboard');
  } catch (err) {
    Alert.alert(
      'Erro no login',
      'Houve um erro no login, verifique seu id de cadastro!'
    );
    yield put(userActions.signInFailure());
  }
}

export default all([takeLatest('@user/SIGN_IN_REQUEST', signInRequest)]);
