import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import ProfileInfo from './components/ProfileInfo';
import PackageHeader from './components/PackageHeader';
import PackageFooter from './components/PackageFooter';
import DeliveryInfo from './components/DeliveryInfo';
import ProgressBar from './components/ProgressBar';

import {
  Container,
  Packages,
  Package,
  PackageProgress,
  ProgressInfo,
  ProgressText,
} from './styles';

import { signOut } from '~/store/modules/user/actions';

import api from '~/services/api';

export default function Deliveries({ navigation }) {
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
  const [refreshing] = useState(false);
  const [filter, setFilter] = useState('');

  const refreshList = useCallback(() => {
    async function loadDeliveries() {
      let { data } = await api.get(`/deliveryman/${profile.id}/deliveries`, {
        params: {
          delivered: filter,
        },
      });
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
  }, [profile.id, filter]);

  useEffect(() => {
    refreshList();
  }, [refreshList]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ProfileInfo data={profile} handleLogout={handleLogout} />

      <DeliveryInfo filter={filter} setFilter={setFilter} />

      <Packages
        data={packages}
        keyExtractor={(item) => String(item.id)}
        onRefresh={refreshList}
        refreshing={refreshing}
        renderItem={({ item, index }) => (
          <Package>
            <PackageHeader data={item} id={profile.id} />

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
            <PackageFooter data={item} navigation={navigation} />
          </Package>
        )}
      />
    </Container>
  );
}
