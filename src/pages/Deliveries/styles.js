import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px 20px;
  background: #fff;
  height: 100%;
`;

export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextInfo = styled.View`
  justify-content: center;
  padding-left: 10px;
`;

export const DeliveryInfo = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Filter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 144px;
`;

export const FilterText = styled.Text`
  font-weight: bold;
  color: ${(props) => (props.active ? '#9751ed' : '#909090')};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => (props.active ? '#9751ed' : '#fff')};
`;

export const Packages = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
})``;

export const Package = styled.View`
  margin-bottom: 40px;
`;

export const PackageHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 154px;
`;

export const PackageProgress = styled.View`
  margin-top: 40px;
`;

export const ProgressInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #909090;
`;

export const PackageFooter = styled.View`
  margin-top: 20px;
  padding: 0 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
