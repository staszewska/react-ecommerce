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

function Home() {
  const [shoppingCart, dispatchShoppingCart] = useReducer(shoppingCartReducer, initialShoppingCart);

  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      <DispatchShoppingCartContext.Provider value={dispatchShoppingCart}>
        <header>
          <TopBar />
          <NavigationTree />
        </header>

        <main>
          <Outlet />
        </main>
      </DispatchShoppingCartContext.Provider>
    </ShoppingCartContext.Provider>
  );
}

export default Home;
