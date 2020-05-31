import styled from 'styled-components/native';

export const ProgressView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const StyledLine = styled.View`
  width: 120px;
  height: 2px;
  background: #9751ed;
`;

export const StyledCircle = styled.View`
  background: ${(props) => (props.active ? '#9751ed' : '#fff')};
  border-width: 1px;
  border-color: #9751ed;
  border-radius: 6px;
  width: 12px;
  height: 12px;
`;
