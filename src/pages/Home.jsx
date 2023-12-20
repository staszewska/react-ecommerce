import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import NavigationTree from '../components/NavigationTree';

function Home() {
  return (
    <>
      <header>
        <TopBar />
        <NavigationTree />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
