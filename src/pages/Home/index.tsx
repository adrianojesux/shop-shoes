import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {Header, CardProduct} from '../../components';
import {Product} from '../../interfaces/product';
import ProductService from './../../services/productsService';

import {Container, Sorter, SorterTitle} from './styles';
import theme from './../../utils/theme';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productList = ProductService.getProducts();
    console.log(productList);
    if (productList) setProducts(productList);
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
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
          </Picker>
        </Sorter>
        {products && (
          <FlatList
            key="product-list"
            data={products}
            numColumns={2}
            keyExtractor={(item) => String(item.product_name)}
            renderItem={({item}) => <CardProduct product={item} />}
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
