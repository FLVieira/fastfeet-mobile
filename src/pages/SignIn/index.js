import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

import Logo from '~/assets/images/fastfeet-logo.svg';

import * as userActions from '~/store/modules/user/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  LogoContainer,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const [idValue, setIdValue] = useState('');

  const loading = useSelector((state) => state.user.loading);

  function handleSubmit() {
    setIdValue('');
    dispatch(userActions.signInRequest(idValue, navigation));
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#9751ed" />
      <LogoContainer>
        <Logo width={240} height={55} />
      </LogoContainer>
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
