import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';

function Home() {
  return (
    <>
      <header>
        <TopBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
