/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ProfileInfo, Info, TextInfo } from '../styles';

export default function ProfileInfoComponent({ data, handleLogout }) {
  return (
    <ProfileInfo>
      <Info>
        {data.avatar ? (
          <Avatar
            rounded
            size="large"
            source={{
              uri: data.avatar.url,
            }}
          />
        ) : (
          <Avatar
            rounded
            title={data.initials}
            size="large"
            containerStyle={{ backgroundColor: '#f5f5f5' }}
            titleStyle={{ color: '#ae86db' }}
          />
        )}
        <TextInfo>
          <Text style={{ color: '#909090', fontSize: 14 }}>
            Bem vindo de volta,
          </Text>
          <Text style={{ color: '#242424', fontSize: 26, fontWeight: 'bold' }}>
            {data.name}
          </Text>
        </TextInfo>
      </Info>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="exit-to-app" size={28} color="#fc0339" />
      </TouchableOpacity>
    </ProfileInfo>
  );
}
