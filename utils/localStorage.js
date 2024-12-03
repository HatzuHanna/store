export const getCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }
};

export const saveCartToLocalStorage = (cartItems) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
};
