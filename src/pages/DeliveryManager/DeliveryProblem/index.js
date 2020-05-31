/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar, TextInput, Alert } from 'react-native';

import {
  HeaderContinuation,
  Background,
  Container,
  InfoContainer,
} from './styles';

import Button from '~/components/Button';

import api from '~/services/api';

export default function DeliveryManager({ route }) {
  const { id } = route.params;
  const deliverymanId = useSelector((state) => state.user.profile.id);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post(`/deliveryman/${deliverymanId}/problems/${id}`, {
        description,
      });
      setDescription('');
      setLoading(false);
      Alert.alert('Sucesso', 'O problema foi enviado com sucesso!');
    } catch (err) {
      Alert.alert('Erro', err.response.data.error);
      setLoading(false);
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#9751ed" />
      <HeaderContinuation />
      <Background />
      <Container>
        <InfoContainer>
          <TextInput
            textAlignVertical="top"
            autoCorrect
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            numberOfLines={20}
            multiline
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <Button loading={loading} color="#9751ed" onPress={handleSubmit}>
            Enviar
          </Button>
        </InfoContainer>
      </Container>
    </>
  );
}
