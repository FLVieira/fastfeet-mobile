import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'react-native-elements';
import { StatusBar, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import DeliveryTruck from '~/assets/images/delivery-truck.svg';
import ProgressBar from '~/components/ProgressBar';

import {
  Container,
  ProfileInfo,
  Info,
  TextInfo,
  DeliveryInfo,
  Filter,
  FilterText,
  Packages,
  Package,
  PackageHeader,
  PackageProgress,
  ProgressInfo,
  ProgressText,
  PackageFooter,
} from './styles';

import { signOut } from '~/store/modules/user/actions';

import api from '~/services/api';

export default function Deliveries() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => {
    if (state.user.profile.avatar === null) {
      return {
        id: state.user.profile.id,
        name: state.user.profile.name,
        email: state.user.profile.email,
        initials: state.user.profile.name.split(' ').map((n) => n[0]),
      };
    }
    return { ...state.user.profile };
  });
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      let { data } = await api.get(`/deliveryman/${profile.id}/deliveries`);
      data = data.map((pack) => {
        return {
          ...pack,
          formattedCreatedAt: format(
            parseISO(pack.created_at),
            "dd'/0'M'/'yyyy",
            {
              locale: pt,
            }
          ),
        };
      });
      setPackages(data);
    }
    loadDeliveries();
  }, [profile.id]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ProfileInfo>
        <Info>
          {profile.avatar ? (
            <Avatar
              rounded
              size="large"
              source={{
                uri: profile.avatar.url,
              }}
            />
          ) : (
            <Avatar
              rounded
              title={profile.initials}
              size="large"
              containerStyle={{ backgroundColor: '#f5f5f5' }}
              titleStyle={{ color: '#ae86db' }}
            />
          )}
          <TextInfo>
            <Text style={{ color: '#909090', fontSize: 14 }}>
              Bem vindo de volta,
            </Text>
            <Text
              style={{ color: '#242424', fontSize: 26, fontWeight: 'bold' }}
            >
              {profile.name}
            </Text>
          </TextInfo>
        </Info>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="exit-to-app" size={28} color="#fc0339" />
        </TouchableOpacity>
      </ProfileInfo>
      <DeliveryInfo>
        <Text style={{ color: '#242424', fontSize: 26, fontWeight: 'bold' }}>
          Entregas
        </Text>
        <Filter>
          <FilterText active>Pendentes</FilterText>
          <FilterText>Entregues</FilterText>
        </Filter>
      </DeliveryInfo>
      <Packages
        data={packages}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <Package>
            <PackageHeader>
              <DeliveryTruck width={40} height={40} fill="#9751ed" />
              <Text
                style={{ color: '#9751ed', fontSize: 15, fontWeight: 'bold' }}
              >
                Encomenda {index + 1}
              </Text>
            </PackageHeader>
            <PackageProgress>
              <ProgressBar
                withdrawal={item.start_date}
                delivered={item.end_date}
              />
              <ProgressInfo>
                <ProgressText style={{ width: 70, textAlign: 'center' }}>
                  Aguardando Retirada
                </ProgressText>
                <ProgressText>Retirada</ProgressText>
                <ProgressText>Entregue</ProgressText>
              </ProgressInfo>
            </PackageProgress>
            <PackageFooter>
              <View>
                <Text
                  style={{ fontWeight: 'bold', color: '#909090', fontSize: 12 }}
                >
                  Data
                </Text>
                <Text style={{ color: '#242424', fontWeight: 'bold' }}>
                  {item.formattedCreatedAt}
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: 'bold', color: '#909090', fontSize: 12 }}
                >
                  Cidade
                </Text>
                <Text style={{ color: '#242424', fontWeight: 'bold' }}>
                  {item.Recipient.city}
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={{ fontWeight: 'bold', color: '#9751ed' }}>
                  Ver detalhes
                </Text>
              </TouchableOpacity>
            </PackageFooter>
          </Package>
        )}
      />
    </Container>
  );
}
