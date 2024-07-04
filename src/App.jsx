import './App.scss';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (price, numb) => {
    const total = price * numb;
    setItems(items + numb);
    setTotalPrice(totalPrice + total);
  };

  return (
    <>
      {' '}
      <Header
        items={items}
        sum={totalPrice}
      />
      <Outlet context={{ addItemToCart }} />
    </>
  );
}

export default App;
