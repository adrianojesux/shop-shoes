import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.View``;

export const HeaderPage = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 4px;
  margin: 4px;
`;

export const TitleCartPage = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 24px;
  color: ${theme.primary};
  margin: auto;
`;

export const ButtonCheckout = styled.TouchableOpacity`
  margin: 32px 16px;
  height: 50px;
  background-color: ${theme.darkOrange};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonCheckoutTitle = styled.Text`
  font-size: 18px;
  color: ${theme.dark};
  padding: 4px 8px;
  font-family: 'Montserrat-Bold';
`;

export const ImageContent = styled.View`
  overflow: hidden;
`;

export const ProductItem = styled.View`
  width: 90%;
  height: 80px;
  margin: 8px 5%;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: row;
  background-color: ${theme.light};
`;

export const ProductName = styled.Text`
  font-size: 13px;
  color: ${theme.dark};
  padding: 4px;
  font-family: 'Montserrat-Bold';
`;

export const ProductDescription = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-Regular';
  color: ${theme.gray};
`;

export const ProductAction = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const ProductInformations = styled.View`
  flex: 1;
  padding: 4px 8px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 15px;
  color: ${theme.gray};
`;

export const ButtonClearCart = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ButtonClearCartText = styled.Text`
  text-decoration: underline;
  font-family: 'Montserrat-Regular';
  font-size: 12px;
`;

export const TotalPrice = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 24px;
  color: ${theme.gray};
  margin: auto;
`;
