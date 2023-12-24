import { action, computed, createStore } from 'easy-peasy';

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

  getSumOfCart: computed((state) => {
    let sum = 0;

    state.shoppingCart.forEach((product) => (sum += product.price * product.quantity));

    return sum;
  }),
});

function initShoppingCart() {
  const isShoppingCartExisted = localStorage.getItem('shoppingCart');

  if (!isShoppingCartExisted) {
    localStorage.setItem('shoppingCart', JSON.stringify([]));

    return [];
  }

  return JSON.parse(isShoppingCartExisted);
}

export default store;
