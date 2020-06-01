import React from 'react';
import { Text, Modal, Alert, View } from 'react-native';

import {
  CenteredView,
  ModalView,
  Description,
  DescriptionText,
  OptionsContainer,
  Optionbutton,
  Content,
  DetailedDescription,
  ButtonText,
} from './styles';

export default function WithdrawalModal({ modalVisible, handleOption }) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <CenteredView>
        <ModalView>
          <Description>
            <DescriptionText>Retirar o pedido</DescriptionText>
          </Description>
          <Content>
            <DetailedDescription>
              Você realmente deseja retirar o pedido?
            </DetailedDescription>
            <OptionsContainer>
              <Optionbutton color="#4ac708" onPress={() => handleOption(true)}>
                <ButtonText>Sim</ButtonText>
              </Optionbutton>
              <Optionbutton color="#fc030b" onPress={() => handleOption(false)}>
                <ButtonText>Não</ButtonText>
              </Optionbutton>
            </OptionsContainer>
          </Content>
        </ModalView>
      </CenteredView>
    </Modal>
  );
}

/*

*/
