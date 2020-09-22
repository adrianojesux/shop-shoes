import styled from 'styled-components/native';
import theme from './../../utils/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SorterTitle = styled.Text`
  font-size: 14px;
  color: ${theme.dark};
`;

export const Sorter = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
