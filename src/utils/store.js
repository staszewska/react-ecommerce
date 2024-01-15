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

  updateCartItem: action((state, payload) => {
    console.log('UPDATE CART');
    console.log('[updateCartItem] payload', payload);

    const updatedShoppingCart = state.shoppingCart.map((item) => {
      if (item.id === payload.id) {
        return payload;
      }

      return item;
    });

    state.shoppingCart = updatedShoppingCart;
  }),

  removeProduct: action((state, payload) => {
    console.log('REMOVE PRODUCT FROM CART');

    const updatedShoppingCart = state.shoppingCart.filter((product) => product.id !== payload.id);

    state.shoppingCart = updatedShoppingCart;
  }),

  saveCartToLocalStorage: action((state) => {
    console.log('SAVE CART TO LOCAL STORAGE');

    localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
  }),

  getSumOfCart: computed((state) => {
    let sum = 0;

    state.shoppingCart.forEach((product) => (sum += product.price * product.quantity));

    return sum;
  }),

  getNumberOfCartItems: computed((state) => {
    return state.shoppingCart.length;
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
