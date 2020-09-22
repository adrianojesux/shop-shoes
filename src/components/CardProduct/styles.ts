import {Dimensions} from 'react-native';
import theme from './../../utils/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 16px 8px;
  flex: 1;
`;

export const ImageContent = styled.View`
  border-radius: 10px;
  overflow: hidden;
`;

export const ContentStars = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ProductPrice = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 22px;
  color: #999;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-family: 'Montserrat-Bold';
`;

export const ProductBody = styled.View`
  flex: 1;
  text-align: center;
  margin: 8px;
`;
