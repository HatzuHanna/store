import { useState, useEffect } from 'react';
import CartItem from './CartItem';

export default function Cart({ cartItems, setCartItems, setIsCartOpen }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  const clearCart = () => {
    setCartItems([]);
    setIsModalOpen(false); 
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 transition-opacity duration-300  ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`w-full md:w-1/3 bg-white  overflow-y-auto transform transition-transform duration-300 p-4 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="flex justify-between items-center">
            <p>Your cart is empty.</p>
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => setIsCartOpen(false), 300); 
              }}
              className="bg-appleBlue text-white px-4 py-2 rounded hover:bg-appleBlueHover active:scale-95"
            >
              Close Cart
            </button>
          </div>
        ) : (
          <main>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
            <div className="flex justify-between p-4 ">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 active:scale-95"
              >
                Clear Cart
              </button>
              <button
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => setIsCartOpen(false), 300);
                }}
                className="bg-appleBlue text-white px-4 py-2 rounded hover:bg-appleBlueHover active:scale-95"
              >
                Close Cart
              </button>
            </div>
          </main>
        )}

        {/* Modal */}
        {isModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-[100%]">
          <div className="bg-white p-3 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Are you sure you want to clear the cart?
              </h3>
              <div className="flex justify-end space-x-2  w-full ">
                <button
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={clearCart}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 active:scale-95"
                >
                  Yes, Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
