import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '~/assets/images/fastfeet-logo.svg';

import * as userActions from '~/store/modules/user/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [idValue, setIdValue] = useState('');

  const loading = useSelector((state) => state.user.loading);

  function handleSubmit() {
    dispatch(userActions.signInRequest(idValue));
  }

  return (
    <Container>
      <Form>
        <FormInput
          icon="account-circle"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe o seu ID de cadastro"
          returnKeyType="send"
          value={idValue}
          onChangeText={setIdValue}
        />

        <SubmitButton color="#68a302" loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
