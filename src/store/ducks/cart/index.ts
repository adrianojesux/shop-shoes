import {Reducer} from 'redux';
import {CartActionTypes, CartState} from './types';
import {produce} from 'immer';

const INITIAL_STATE: CartState = {
  loading: false,
  error: false,
  data: [],
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CartActionTypes.ADD_PRODUCT:
        draft.data.push(action.payload.data);
        return draft;
      case CartActionTypes.REMOVE_PRODUCT:
        const index = draft.data.findIndex((p) => p.id === action.payload.data);
        const data = draft.data.splice(index, 1);
        draft.data = data;
        return draft;
      case CartActionTypes.CLEAR_CART:
        draft.data = [];
        return draft;
      default:
        return draft;
    }
  });
};

export default reducer;
