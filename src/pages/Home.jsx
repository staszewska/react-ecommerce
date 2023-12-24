import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import NavigationTree from '../components/NavigationTree';
import {
  ShoppingCartContext,
  DispatchShoppingCartContext,
  initialShoppingCart,
  shoppingCartReducer,
} from '../contexts/ShoppingCartContext';
import { useReducer } from 'react';
import { StoreProvider } from 'easy-peasy';
import store from '../stores/shoppingCart';

function Home() {
  const [shoppingCart, dispatchShoppingCart] = useReducer(shoppingCartReducer, initialShoppingCart);

  return (
    <StoreProvider store={store}>
      <header>
        <TopBar />
        <NavigationTree />
      </header>

      <main>
        <Outlet />
      </main>
    </StoreProvider>
  );
}

export default Home;
