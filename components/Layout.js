import Navbar from './Navbar';
import Cart from './Cart';
import { useState } from 'react';

export default function Layout({ children, cartItems, setCartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setIsCartOpen={setIsCartOpen}
        />
      )}
      <main className=''>{children}</main>
    </>
  );
}
