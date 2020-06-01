import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { DeliveryInfo, Filter, FilterText } from '../styles';

export default function DeliveryInfoComponent({ filter, setFilter }) {
  return (
    <DeliveryInfo>
      <Text style={{ color: '#242424', fontSize: 26, fontWeight: 'bold' }}>
        Entregas
      </Text>
      <Filter>
        <TouchableOpacity onPress={() => setFilter('')}>
          <FilterText active={filter === ''}>Pendentes</FilterText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('true')}>
          <FilterText active={filter === 'true'}>Entregues</FilterText>
        </TouchableOpacity>
      </Filter>
    </DeliveryInfo>
  );
}
