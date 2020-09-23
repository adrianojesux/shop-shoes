import {Product} from './../../../interfaces/product';
import {action} from 'typesafe-actions';
import {CartActionTypes} from './types';

export const addProduct = (product: Product) =>
  action(CartActionTypes.ADD_PRODUCT, {data: product});
export const removeProduct = (productId: number) =>
  action(CartActionTypes.REMOVE_PRODUCT, {data: productId});
export const clearCart = () => action(CartActionTypes.CLEAR_CART);
