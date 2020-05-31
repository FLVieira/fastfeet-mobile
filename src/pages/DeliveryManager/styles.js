import styled from 'styled-components/native';

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

export const InfoContainer = styled.View`
  padding: 20px;
`;

export const DeliveryInfo = styled.View`
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const StrongText = styled.Text`
  color: #9e9e9e;
  font-weight: bold;
`;

export const StandardText = styled.Text`
  color: #909090;
`;

export const Info = styled.View`
  margin-bottom: 15px;
`;

export const DatesInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

export const IconInfo = styled.TouchableOpacity`
  margin-bottom: 15px;
  align-items: center;
`;

export const IconText = styled.Text`
  color: #909090;
  width: 80px;
  text-align: center;
`;
