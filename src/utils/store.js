import { action, createStore } from 'easy-peasy';

function initShoppingCart() {
  const isShoppingCartExisted = localStorage.getItem('shoppingCart');

  if (!isShoppingCartExisted) {
    localStorage.setItem('shoppingCart', JSON.stringify([]));

    return [];
  }

  return JSON.parse(isShoppingCartExisted);
}

const store = createStore({
  shoppingCart: initShoppingCart(),

  addToCart: action((state, payload) => {
    console.log('ADD TO CART');

    const isProductAdded = state.shoppingCart.find((product) => product.id === payload.id);

    if (!isProductAdded) {
      state.shoppingCart.push(payload);
    }
  }),

  saveCartToLocalStorage: action((state) => {
    localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
  }),
});

export default store;
