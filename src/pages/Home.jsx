import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <header>
        <h1>React E-Commerce App</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
