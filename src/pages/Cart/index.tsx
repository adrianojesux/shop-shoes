import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {Alert, Image} from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import theme from '../../utils/theme';
import {formatCurrency} from '../../utils/formatter';

import {removeProduct, clearCart} from './../../store/ducks/cart/actions';

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
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    let value = 0;
    if (products && products.length > 0) {
      for (const product of products) {
        if (product.sale_price) {
          value += Number(product.sale_price);
        } else {
          value += Number(product.price);
        }
      }
    }
    return value.toFixed(2);
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
    dispatch(removeProduct(product_id));
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
              <TouchableOpacity
                onPress={() => handleRemoveProduct(Number(product.id))}>
                <MDIcon name="delete-outline" size={22} color={theme.gray} />
              </TouchableOpacity>
            </ProductAction>
          </ProductItem>
        ))}

      <TotalPrice>Total: R$ {totalValue}</TotalPrice>
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
