import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 30px 10px 0px 25px;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: #fff;
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const ProfileInfo = styled.View`
  margin-top: 35px;
  align-items: flex-start;
`;

export const Info = styled.View`
  margin-bottom: 15px;
  justify-content: center;
`;

export const LogoutButton = styled(RectButton)`
  margin-top: 20px;
  width: 100%;
  border-radius: 4px;
  background: #fc0339;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
