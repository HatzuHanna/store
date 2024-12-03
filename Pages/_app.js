import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { getCartFromLocalStorage, saveCartToLocalStorage } from '../utils/localStorage';

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = getCartFromLocalStorage();
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <Layout cartItems={cartItems} setCartItems={setCartItems}>
      <Component
        {...pageProps}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </Layout>
  );
}

export default MyApp;
