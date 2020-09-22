import {Product} from './../../../interfaces/product';

export interface CartState {
  loading: boolean;
  error: boolean;
  data: Product[];
}

export enum CartActionTypes {
  ADD_PRODUCT = '@cart/add_product',
  REMOVE_PRODUCT = '@cart/remove_product',
  CLEAR_CART = '@cart/clear',
}
