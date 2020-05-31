import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  AvatarContainer,
  ProfileInfo,
  Info,
  LogoutButton,
} from './styles';

import { signOut } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => {
    if (state.user.profile.avatar === null) {
      return {
        id: state.user.profile.id,
        name: state.user.profile.name,
        email: state.user.profile.email,
        initials: state.user.profile.name.split(' ').map((n) => n[0]),
        created_at: state.user.profile.created_at,
      };
    }
    return { ...state.user.profile };
  });

  const createdAtFormatted = useMemo(() => {
    return format(parseISO(profile.created_at), "dd'/0'M'/'yyyy", {
      locale: pt,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AvatarContainer>
        {profile.avatar ? (
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: profile.avatar.url,
            }}
          />
        ) : (
          <Avatar
            rounded
            title={profile.initials}
            size="xlarge"
            containerStyle={{ backgroundColor: '#f5f5f5' }}
            titleStyle={{ color: '#ae86db' }}
          />
        )}
      </AvatarContainer>
      <ProfileInfo>
        <Info>
          <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 12 }}>
            Nome completo
          </Text>
          <Text style={{ color: '#242424', fontWeight: 'bold', fontSize: 28 }}>
            {profile.name}
          </Text>
        </Info>
        <Info>
          <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 12 }}>
            Email
          </Text>
          <Text style={{ color: '#242424', fontWeight: 'bold', fontSize: 28 }}>
            {profile.email}
          </Text>
        </Info>
        <Info>
          <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 12 }}>
            Data de cadastro
          </Text>
          <Text style={{ color: '#242424', fontWeight: 'bold', fontSize: 28 }}>
            {createdAtFormatted}
          </Text>
        </Info>
      </ProfileInfo>
      <LogoutButton onPress={handleLogout}>
        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 16 }}>
          Logout
        </Text>
      </LogoutButton>
    </Container>
  );
}

// 242424
// fc0339
