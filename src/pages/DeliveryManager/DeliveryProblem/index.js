/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar, TextInput, Alert, Keyboard } from 'react-native';
import Snackbar from 'react-native-snackbar';

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
      Keyboard.dismiss();
      setLoading(true);
      await api.post(`/deliveryman/${deliverymanId}/problems/${id}`, {
        description,
      });
      setDescription('');
      setLoading(false);

      Snackbar.show({
        text: 'O problema foi enviado com sucesso!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#79b791',
      });
    } catch (err) {
      Keyboard.dismiss();
      setLoading(false);
      setDescription('');
      Alert.alert('Erro', err.response.data.error);
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
            returnKeyLabel="send"
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
