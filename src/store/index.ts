import {createStore, Store} from 'redux';
import {CartState} from './ducks/cart/types';

import rootReducers from './ducks/rootReducers';

export interface ApplicationState {
  cart: CartState;
}

const store: Store<ApplicationState> = createStore(rootReducers);

export default store;
