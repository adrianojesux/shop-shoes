import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Image} from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Product} from '../../interfaces/product';
import theme from '../../utils/theme';
import {formatCurrency} from '../../utils/formatter';
import {addProduct} from './../../store/ducks/cart/actions';

import ProductService from './../../services/productsService';

import {
  Container,
  HeaderPage,
  BackButton,
  ImageContent,
  ProductBody,
  ProductName,
  ProductPrice,
  ContentStars,
  ProductDescription,
  ProductOldPrice,
  CommentsArea,
  CommentTitleArea,
  Comment,
  CommentAuthor,
  CommentText,
  ButtonAddToCart,
  ButtonAddToCartTitle,
} from './styles';
import {useDispatch} from 'react-redux';

interface PageProductParams {
  product_id: number;
}

const Detail: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const {
    params: {product_id},
  } = useRoute<RouteProp<Record<string, PageProductParams>, string>>();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(product_id);
    if (product_id) {
      const productData = ProductService.getById(product_id);
      if (productData) setProduct(productData);
      else navigation.goBack();
    }
  }, [product_id]);

  const handleBackButton = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleAddProductToCart = useCallback(() => {
    debugger;
    dispatch(addProduct(product as Product));
    navigation.goBack();
  }, [product]);

  return (
    <Container>
      <HeaderPage>
        <BackButton onPress={handleBackButton}>
          <MDIcon name="arrow-left" size={22} color={theme.primary} />
        </BackButton>
      </HeaderPage>
      {product && (
        <>
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
            <ProductDescription>
              {product.product_description}
            </ProductDescription>
            {product.sale_price ? (
              <>
                <ProductOldPrice>
                  {formatCurrency(Number(product.price))}
                </ProductOldPrice>
                <ProductPrice>
                  {formatCurrency(Number(product.sale_price))}
                </ProductPrice>
              </>
            ) : (
              <ProductPrice>
                {formatCurrency(Number(product.price))}
              </ProductPrice>
            )}
            <ButtonAddToCart onPress={handleAddProductToCart}>
              <ButtonAddToCartTitle>Adicionar ao Carrinho</ButtonAddToCartTitle>
              <MDIcon name="cart-outline" size={22} color={theme.dark} />
            </ButtonAddToCart>
            <CommentsArea>
              <CommentTitleArea>
                <MDIcon
                  name="comment-outline"
                  size={22}
                  color={theme.gray}
                  style={{marginRight: 10}}
                />
                <ProductDescription>Comentários</ProductDescription>
              </CommentTitleArea>
              {product.comments?.map((comment) => (
                <Comment>
                  <CommentAuthor>{comment.author_name}</CommentAuthor>
                  <CommentText>{comment.comment_text}</CommentText>
                </Comment>
              ))}
            </CommentsArea>
          </ProductBody>
        </>
      )}
    </Container>
  );
};

export default Detail;
