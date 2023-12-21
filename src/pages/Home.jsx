import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import NavigationTree from '../components/NavigationTree';
import { ShoppingCartContext, shoppingCartInitialValue, shoppingCartReducer } from '../contexts/ShoppingCartContext';
import { useState, useReducer } from 'react';

function Home() {
  const [shoppingCart, dispatchShoppingCart] = useReducer(shoppingCartReducer, shoppingCartInitialValue);

  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      <header>
        <TopBar />
        <NavigationTree />
      </header>

      <main>
        <Outlet />
      </main>
    </ShoppingCartContext.Provider>
  );
}

export default Home;
