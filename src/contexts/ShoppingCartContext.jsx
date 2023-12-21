import { createContext } from 'react';

const ShoppingCartContext = createContext();

const initialShoppingCart = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 3 },
];

function shoppingCartReducer(state, action) {
  switch (action.type) {
  }
}

export { ShoppingCartContext, initialShoppingCart, shoppingCartReducer };
