import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {Alert, Image} from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import theme from '../../utils/theme';
import {formatCurrency} from '../../utils/formatter';

import {remodeProduct, clearCart} from './../../store/ducks/cart/actions';

import {
  Container,
  BackButton,
  HeaderPage,
  TitleCartPage,
  ButtonCheckout,
  ButtonCheckoutTitle,
  ProductItem,
  ProductAction,
  ProductInformations,
  ProductName,
  ProductDescription,
  ProductPrice,
  TotalPrice,
  ButtonClearCart,
  ButtonClearCartText,
} from './styles';

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {data: products, loading, error} = useSelector(
    (state: ApplicationState) => state.cart,
  );

  useEffect(() => {
    console.log(products);
  }, [products]);

  const totalValue = useMemo(() => {
    if (products && products.length > 0) {
      const value = products.reduce((acc, p) => {
        if (p.sale_price) {
          acc.price += p.sale_price;
          return acc;
        }
        acc.price += p.price;
        return acc;
      });
      return value.price;
    }
    return 0;
  }, [products]);

  const handleBackButton = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleCheckout = useCallback(() => {
    Alert.alert('Pronto', 'Compra realizada com sucesso');
    navigation.goBack();
    dispatch(clearCart());
  }, []);

  const handleRemoveProduct = useCallback((product_id: number) => {
    dispatch(remodeProduct(product_id));
  }, []);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, []);

  return (
    <Container>
      <HeaderPage>
        <BackButton onPress={handleBackButton}>
          <MDIcon name="arrow-left" size={22} color={theme.gray} />
        </BackButton>
      </HeaderPage>
      <MDIcon
        name="cart-outline"
        size={50}
        color={theme.darkOrange}
        style={{textAlign: 'center'}}
      />
      <TitleCartPage>Meu Carrinho</TitleCartPage>
      {products &&
        products.map((product) => (
          <ProductItem>
            <Image
              source={{
                uri: product.principal_image,
              }}
              style={{aspectRatio: 1 / 1}}
            />
            <ProductInformations>
              <ProductName>{product.product_name}</ProductName>
              <ProductDescription>
                {product.product_description}
              </ProductDescription>
              <ProductPrice>
                {product.sale_price
                  ? formatCurrency(Number(product.sale_price))
                  : formatCurrency(Number(product.price))}
              </ProductPrice>
            </ProductInformations>
            <ProductAction>
              <MDIcon
                name="delete-outline"
                size={22}
                color={theme.gray}
                onPress={() => handleRemoveProduct(Number(product.id))}
              />
            </ProductAction>
          </ProductItem>
        ))}

      <TotalPrice>Total: {totalValue}</TotalPrice>
      <ButtonCheckout onPress={handleCheckout}>
        <ButtonCheckoutTitle>Fechar Compra</ButtonCheckoutTitle>
      </ButtonCheckout>
      <ButtonClearCart onPress={handleClearCart}>
        <ButtonClearCartText>Limpar Carrinho</ButtonClearCartText>
      </ButtonClearCart>
    </Container>
  );
};

export default Cart;
