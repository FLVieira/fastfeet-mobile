import styled from 'styled-components/native';

export const HeaderContinuation = styled.View`
  height: 100px;
  background: #9751ed;
  position: relative;
  display: flex;
  align-items: center;
`;

export const TextBelowHeader = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
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
  top: 35px;
  left: 20px;
  background: #fff;
  border-radius: 8px;
`;

export const InfoContainer = styled.View`
  padding: 10px 20px;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 8,
  },
})``;

export const Problem = styled.View`
  margin-bottom: 30px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionText = styled.Text`
  color: #909090;
  width: 80%;
`;
