/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar, Text } from 'react-native';

import {
  HeaderContinuation,
  Background,
  Container,
  InfoContainer,
} from './styles';

export default function ConfirmDelivery({ route }) {
  const { id } = route.params;
  const deliverymanId = useSelector((state) => state.user.profile.id);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#9751ed" />
      <HeaderContinuation />
      <Background />
      <Container>
        <InfoContainer>
          <Text>Oi ConfirmDelivery</Text>
        </InfoContainer>
      </Container>
    </>
  );
}
