import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Keyboard, ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {Header, CardProduct} from '../../components';
import {Product} from '../../interfaces/product';
import ProductService from './../../services/productsService';

import {Container, Sorter, SorterTitle} from './styles';
import theme from './../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import route_names from '../../utils/route_names';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [searching, setSearching] = useState<boolean>();

  const navigation = useNavigation();

  useEffect(() => {
    const productList = ProductService.getProducts();
    console.log(productList);
    if (productList) setProducts(productList);
  }, []);

  const handleNavigateToCart = useCallback(() => {
    navigation.navigate(route_names.CART);
  }, []);

  const handleOnSearch = useCallback((query: string) => {
    if (!!query && query.trim() === '') {
      setSearching(false);
      return;
    }
    setSearching(true);
    const productList = ProductService.findByName(query);
    setProductsFiltered(productList);
  }, []);

  const handleOnCloseSearch = useCallback(() => {
    setSearching(false);
    Keyboard.dismiss();
  }, []);

  function handleOpenPageDetail(product_id: number) {
    navigation.navigate(route_names.DETAILS, {product_id});
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onNavToCart={handleNavigateToCart}
          onSearch={handleOnSearch}
          onCloseSearch={handleOnCloseSearch}
        />
        {products && !searching && (
          <>
            <Sorter>
              <SorterTitle>Ordernado por:</SorterTitle>
              <Picker
                selectedValue={'Menor preço'}
                style={{
                  height: 50,
                  width: 180,
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                }}
                onValueChange={(value, index) => {
                  console.log(value);
                }}>
                <Picker.Item label="Menor Preço" value="meno-preco" />
                <Picker.Item label="Menor Preço" value="maior-preco" />
              </Picker>
            </Sorter>
            <FlatList
              key="product-list"
              data={products}
              numColumns={2}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <CardProduct product={item} onTap={handleOpenPageDetail} />
              )}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.2}
              contentContainerStyle={{paddingBottom: 5}}
            />
          </>
        )}
        {searching && (
          <FlatList
            key="product-list"
            data={productsFiltered}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
              <CardProduct product={item} onTap={handleOpenPageDetail} />
            )}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            contentContainerStyle={{paddingBottom: 5}}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default Home;
