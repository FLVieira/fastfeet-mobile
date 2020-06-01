import React, { useState } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Snackbar from 'react-native-snackbar';

import {
  PackageHeader,
  PackageHeaderInfo,
  PackageHeaderWithdrawal,
} from '../styles';

import WithdrawalModal from './WithdrawalModal';
import DeliveryTruck from '~/assets/images/delivery-truck.svg';

import api from '~/services/api';

export default function PackageHeaderComponent({ data, id }) {
  const orderId = data.id;
  const deliverymanId = id;

  const [modalVisible, setModalVisible] = useState(false);

  async function handleOption(option) {
    if (option === false) {
      return setModalVisible(false);
    }
    try {
      setModalVisible(false);
      await api.put(
        `/deliveryman/${deliverymanId}/deliveries/${orderId}`,
        null,
        {
          params: { withdraw: String(true) },
        }
      );
      return Snackbar.show({
        text: 'A retirada foi confirmada com sucesso!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#79b791',
      });
    } catch (err) {
      return Snackbar.show({
        text: err.response.data.error,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#e50000',
      });
    }
  }

  return (
    <PackageHeader>
      <WithdrawalModal
        modalVisible={modalVisible}
        handleOption={handleOption}
      />
      <PackageHeaderInfo>
        <DeliveryTruck width={40} height={40} fill="#9751ed" />
        <Text
          style={{
            color: '#9751ed',
            paddingLeft: 5,
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Encomenda #{data.id}
        </Text>
      </PackageHeaderInfo>
      {!data.start_date && (
        <PackageHeaderWithdrawal onPress={() => setModalVisible(true)}>
          <Icon name="exit-to-app" size={24} color="#ffbd69" />
          <Text
            style={{
              color: '#ffbd69',
              paddingLeft: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            Retirar Pedido
          </Text>
        </PackageHeaderWithdrawal>
      )}
    </PackageHeader>
  );
}
