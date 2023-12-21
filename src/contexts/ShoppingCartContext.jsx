import { createContext } from 'react';

const ShoppingCartContext = createContext();

const shoppingCartInitialValue = { count: 3 };

function shoppingCartReducer(state, action) {
  switch (action.type) {
  }
}

export { ShoppingCartContext, shoppingCartInitialValue, shoppingCartReducer };
