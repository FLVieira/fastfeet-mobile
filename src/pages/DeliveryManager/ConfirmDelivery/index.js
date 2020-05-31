import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';
import {
  HeaderContinuation,
  Background,
  Container,
  InfoContainer,
  Preview,
  CameraButton,
  BtnSubmit,
} from './styles';

import previewImage from '~/assets/images/preview.png';
import Camera from './RNCamera';

import api from '~/services/api';

export default function ConfirmDelivery({ route }) {
  const { id } = route.params;
  const deliverymanId = useSelector((state) => state.user.profile.id);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [preview, setPreview] = useState(previewImage);
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(false);

  function loadPreview(uri, name, type) {
    setPreview({ uri });
    setPhotoData({ uri, name, type });
    setCameraOpen(false);
  }

  async function handleSubmit() {
    if (photoData === null) {
      Snackbar.show({
        text: 'Por favor, inclua uma foto da assinatura do destinatário!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#E7BA40',
      });
    } else {
      try {
        setLoading(true);
        // eslint-disable-next-line no-undef
        const formData = new FormData();
        formData.append('file', {
          type: photoData.type,
          uri: photoData.uri,
          name: photoData.name,
        });

        const photoResponse = await api.post(`/files`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        await api.put(
          `/deliveryman/${deliverymanId}/deliveries/${id}`,
          {
            signature_picture: photoResponse.data.id,
          },
          {
            params: { delivery: String(true) },
          }
        );
        setLoading(false);
        Snackbar.show({
          text: 'A entrega foi confirmada com sucesso!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: '#79b791',
        });
      } catch (error) {
        setLoading(false);
        Snackbar.show({
          text: 'Não foi possível confirmar a entrega!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: '#e50000',
        });
      }
    }
  }

  if (cameraOpen) return <Camera loadPreview={loadPreview} />;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#9751ed" />
      <HeaderContinuation />
      <Background />
      <Container>
        <InfoContainer>
          {preview && <Preview source={preview} />}
          <CameraButton onPress={() => setCameraOpen(true)}>
            <Icon name="photo-camera" size={36} color="#fff" />
          </CameraButton>
          <BtnSubmit loading={loading} color="#7d40e7" onPress={handleSubmit}>
            Enviar
          </BtnSubmit>
        </InfoContainer>
      </Container>
    </>
  );
}
