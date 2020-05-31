/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, Text } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  HeaderContinuation,
  TextBelowHeader,
  Background,
  Container,
  InfoContainer,
  ProblemsList,
  Problem,
  DescriptionText,
} from './styles';

import api from '~/services/api';

export default function ProblemsManager({ route }) {
  const { id } = route.params;
  const [problems, setProblems] = useState([]);
  const [refreshing] = useState(false);

  const refreshList = useCallback(() => {
    async function loadDeliveries() {
      const { data } = await api.get(`delivery/problems/${id}`);

      setProblems(data);
    }
    loadDeliveries();
  }, [id]);

  useEffect(() => {
    refreshList();
  }, [refreshList]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#9751ed" />
      <HeaderContinuation>
        <TextBelowHeader>Encomenda #{id}</TextBelowHeader>
      </HeaderContinuation>
      <Background />
      <Container>
        <InfoContainer>
          <ProblemsList
            data={problems}
            keyExtractor={(item) => String(item.id)}
            onRefresh={refreshList}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <Problem>
                <DescriptionText>{item.description}</DescriptionText>
                <Text style={{ fontSize: 10, color: '#a8a8a8' }}>
                  {format(parseISO(item.created_at), "dd'/0'M'/'yyyy", {
                    locale: pt,
                  })}
                </Text>
              </Problem>
            )}
          />
        </InfoContainer>
      </Container>
    </>
  );
}
