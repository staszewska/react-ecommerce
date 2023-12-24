import { action, createStore } from 'easy-peasy';

const store = createStore({
  shoppingCart: [],

  addToCart: action((state, payload) => {
    console.log('ADD TO CART');

    const isProductAdded = state.shoppingCart.find((product) => product.id === payload.id);

    if (!isProductAdded) {
      state.shoppingCart.push(payload);
    }
  }),
});

export default store;
