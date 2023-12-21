import { createContext } from 'react';

const ShoppingCartContext = createContext();
const DispatchShoppingCartContext = createContext();

const initialShoppingCart = [];

function shoppingCartReducer(state, action) {
  console.log('@@ ShoppingCart @@', state);

  switch (action.type) {
    case 'ADD_PRODUCT': {
      const isProductAdded = state.find((state) => state.id === action.id);

      if (!isProductAdded) {
        return [
          ...state,
          {
            id: action.id,
            quantity: action.quantity,
            title: action.title,
            price: action.price,
          },
        ];
      }

      const newState = state.filter((state) => state.id !== action.id);

      newState.push({
        id: action.id,
        quantity: action.quantity,
        title: action.title,
        price: action.price,
      });

      return newState;
    }
  }
}

export { ShoppingCartContext, DispatchShoppingCartContext, initialShoppingCart, shoppingCartReducer };
