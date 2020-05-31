/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import DeliveryTruck from '~/assets/images/delivery-truck.svg';

import {
  HeaderContinuation,
  Background,
  Container,
  InfoContainer,
  DeliveryInfo,
  StrongText,
  StandardText,
  Info,
  DatesInfo,
  OptionsContainer,
  IconInfo,
  IconText,
} from './styles';

export default function DeliveryManager({ route, navigation }) {
  const { data } = route.params;
  const formattedAdress = `${data.Recipient.street}, ${data.Recipient.number}, ${data.Recipient.city} - ${data.Recipient.state} / ${data.Recipient.postal_code}`;
  let orderStatus;
  if (data.start_date === null) {
    orderStatus = 'Aguardando retirada';
  }
  if (data.start_date !== null) {
    orderStatus = 'Retirada';
  }
  if (data.end_date !== null) {
    orderStatus = 'Entregue';
  }
  if (data.canceled_at !== null) {
    orderStatus = 'Cancelada';
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#9751ed" />
      <HeaderContinuation />
      <Background />
      <Container>
        <InfoContainer>
          <DeliveryInfo>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <DeliveryTruck width={40} height={30} fill="#9751ed" />
              <Text
                style={{ marginLeft: 2, fontWeight: 'bold', color: '#9751ed' }}
              >
                Informações da entrega
              </Text>
            </View>

            <Info>
              <StrongText>DESTINATÁRIO</StrongText>
              <StandardText>{data.Recipient.receiver_name}</StandardText>
            </Info>

            <Info>
              <StrongText>ENDEREÇO DE ENTREGA</StrongText>
              <StandardText>{formattedAdress}</StandardText>
            </Info>

            <Info>
              <StrongText>PRODUTO</StrongText>
              <Text style={{ color: '#909090' }}>{data.product}</Text>
            </Info>
          </DeliveryInfo>
          <DeliveryInfo>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Icon name="date-range" size={26} color="#9751ed" />
              <Text
                style={{ marginLeft: 5, fontWeight: 'bold', color: '#9751ed' }}
              >
                Situação da entrega
              </Text>
            </View>
            <Info>
              <StrongText>STATUS</StrongText>
              <StandardText>{orderStatus}</StandardText>
            </Info>

            <DatesInfo>
              <Info>
                <StrongText>DATA DE RETIRADA</StrongText>
                <StandardText>
                  {data.start_date
                    ? format(parseISO(data.start_date), "dd'/0'M'/'yyyy", {
                        locale: pt,
                      })
                    : '-- / -- / ----'}
                </StandardText>
              </Info>
              <Info>
                <StrongText>DATA DE ENTREGA</StrongText>
                <StandardText>
                  {data.end_date
                    ? format(parseISO(data.start_date), "dd'/0'M'/'yyyy", {
                        locale: pt,
                      })
                    : '-- / -- / ----'}
                </StandardText>
              </Info>
            </DatesInfo>
          </DeliveryInfo>
          <OptionsContainer>
            <IconInfo onPress={() => {}}>
              <Icon name="cancel" size={26} color="#fc0339" />
              <IconText>Informar Problema</IconText>
            </IconInfo>
            <IconInfo onPress={() => {}}>
              <Icon name="error" size={26} color="#ffff24" />
              <IconText>Vizualizar Problemas</IconText>
            </IconInfo>
            <IconInfo onPress={() => {}}>
              <Icon name="check-circle" size={26} color="#9751ed" />
              <IconText>Confirmar Entrega</IconText>
            </IconInfo>
          </OptionsContainer>
        </InfoContainer>
      </Container>
    </>
  );
}
