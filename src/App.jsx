import './App.scss';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header
        items={3}
        sum={151}
      />

      <Outlet />
    </>
  );
}

export default App;
