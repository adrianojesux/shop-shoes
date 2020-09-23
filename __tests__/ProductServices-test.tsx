import React from 'react';
import 'react-native';
import {not} from 'react-native-reanimated';
import ProductService from './../src/services/productsService';

describe('Test ProductServicee', () => {
  it('should return product list', () => {
    const products = ProductService.getProducts();
    expect(products).toBeDefined();
    expect(products.length).not.toBe(0);
  });

  it('should return value when find by name', () => {
    const valueEmpty = ProductService.findByName('');
    const valueNotEmpty = ProductService.findByName('Adidas');
    expect(valueEmpty.length).toEqual(0);
    expect(valueNotEmpty.length).not.toEqual(0);
    expect(valueNotEmpty[0].product_name).toContain('Adidas');
  });
});
