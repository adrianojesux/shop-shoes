import React from 'react';
import {View, Image} from 'react-native';
import {Product} from '../../interfaces/product';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ImageContent,
  ContentStars,
  ProductBody,
  ProductName,
  ProductPrice,
} from './styles';
import theme from '../../utils/theme';

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({product}) => {
  return (
    <Container>
      <ImageContent>
        <Image
          source={{uri: product.principal_image}}
          style={{aspectRatio: 1 / 1}}
        />
      </ImageContent>
      <ProductBody>
        <ContentStars>
          <MDIcon name="star" size={22} color={theme.darkOrange} />
          <MDIcon name="star" size={22} color={theme.darkOrange} />
          <MDIcon name="star" size={22} color={theme.darkOrange} />
          <MDIcon name="star" size={22} color={theme.darkOrange} />
          <MDIcon name="star" size={22} color={theme.light} />
        </ContentStars>
        <ProductName>{product.product_name}</ProductName>
        <ProductPrice>R$ {product.price}</ProductPrice>
      </ProductBody>
    </Container>
  );
};

export default CardProduct;
