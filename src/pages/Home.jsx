import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import NavigationTree from '../components/NavigationTree';
import { StoreProvider } from 'easy-peasy';
import store from '../utils/store';

function Home() {
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
