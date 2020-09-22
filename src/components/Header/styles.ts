import styled from 'styled-components/native';
import theme from './../../utils/theme';

export const Container = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const HeaderActions = styled.View`
  flex-direction: row;
`;

export const HeaderButton = styled.TouchableOpacity`
  margin: 0 8px;
`;

export const TitleApp = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 24px;
  color: ${theme.primary};
`;
