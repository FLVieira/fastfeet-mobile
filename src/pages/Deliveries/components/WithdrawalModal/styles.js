import styled from 'styled-components/native';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 4px;
  padding: 28px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const Description = styled.View`
  position: absolute;
  top: 10px;
  left: 5px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #909090;
  width: 100%;
`;

export const DescriptionText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  padding-left: 10px;
  color: #0b0b0b;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: space-between;
  height: 140px;
  padding-top: 40px;
`;

export const DetailedDescription = styled.Text`
  font-size: 14px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 260px;
`;

export const Optionbutton = styled.TouchableHighlight`
  width: 120px;
  height: 40px;
  padding: 10px;
  border-radius: 4px;
  background: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  border: 2px solid #eee;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
