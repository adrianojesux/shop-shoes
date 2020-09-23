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
import {useNavigation} from '@react-navigation/native';
import route_names from '../../utils/route_names';

interface CardProductProps {
  product: Product;
  onTap?: (product_id: number) => void;
}

const CardProduct: React.FC<CardProductProps> = ({product, onTap}) => {
  function handleOpenPageDetail() {
    if (onTap) onTap(Number(product.id));
    //navigation.navigate(route_names.DETAILS, {product_id: product.id});
  }

  return (
    <Container onPress={handleOpenPageDetail}>
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
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
      </ProductBody>
    </Container>
  );
};

export default CardProduct;
