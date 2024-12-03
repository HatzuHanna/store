import { useState } from 'react';

export default function CartItem({ item, cartItems, setCartItems }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [showModal, setShowModal] = useState(false);

  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };

  const confirmDelete = () => {
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    setShowModal(false);
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleDeleteCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center mb-4">
      <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
      <div className="ml-4 flex-1">
        <h3 className="text-lg">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center mt-2">
          <button
            className="px-2 border rounded-l"
            onClick={() => updateQuantity(quantity - 1)}
          >
            -
          </button>
          <span className="px-2 border-t border-b">{quantity}</span>
          <button
            className="px-2 border rounded-r"
            onClick={() => updateQuantity(quantity + 1)}
          >
            +
          </button>
          <button
            className="ml-4 text-red-600 hover:underline "
            onClick={confirmDelete}
          >
            Delete
          </button>
        </div>
      </div>

      {showModal && (
        <div className="absolute w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 h-[100%]">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Are you sure you want to delete this item?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 active:scale-95"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 active:scale-95"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
