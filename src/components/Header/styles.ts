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

export const InputSearchContent = styled.View`
  flex: 1;
  border: solid 1px #ccc;
  border-radius: 5px;
  height: 40px;
  flex-direction: row;
  align-items: center;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholder: 'Pesquisar produto',
  placeholderTextColor: '#cdcdcd',
})`
  flex: 1;
  padding: 4px 8px;
`;

export const InputSearchButtonClose = styled.TouchableOpacity`
  margin: 8px;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${theme.light};
  align-items: center;
  justify-content: center;
`;
