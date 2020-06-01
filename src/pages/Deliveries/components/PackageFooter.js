import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { PackageFooter } from '../styles';

export default function PackageFooterComponent({ data, navigation }) {
  return (
    <PackageFooter>
      <View>
        <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 12 }}>
          Data
        </Text>
        <Text style={{ color: '#242424', fontWeight: 'bold' }}>
          {data.formattedCreatedAt}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 12 }}>
          Cidade
        </Text>
        <Text style={{ color: '#242424', fontWeight: 'bold' }}>
          {data.Recipient.city}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeliveryManager', { data })}
      >
        <Text style={{ fontWeight: 'bold', color: '#9751ed' }}>
          Ver detalhes
        </Text>
      </TouchableOpacity>
    </PackageFooter>
  );
}
