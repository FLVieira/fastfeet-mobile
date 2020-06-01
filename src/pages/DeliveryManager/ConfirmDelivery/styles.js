import styled from 'styled-components/native';
import Button from '~/components/Button';

export const HeaderContinuation = styled.View`
  height: 100px;
  background: #9751ed;
  position: relative;
`;

export const Background = styled.View`
  background: #fff;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 90%;
  top: 20px;
  left: 20px;
  background: #fff;
  border-radius: 8px;
`;

export const InfoContainer = styled.View``;

export const Preview = styled.Image`
  border-radius: 6px;
  height: 80%;
  width: 100%;
`;

export const CameraButton = styled.TouchableOpacity`
  border-radius: 180px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 70%;
  align-self: center;
  padding: 10px;
`;

export const BtnSubmit = styled(Button)`
  margin-top: 15px;
`;
