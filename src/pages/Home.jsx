import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { StoreProvider } from 'easy-peasy';
import store from '../utils/store';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <StoreProvider store={store}>
      <header>
        <TopBar />
      </header>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </StoreProvider>
  );
}

export default Home;
