export default function ProductItem({ product, cartItems, setCartItems }) {
  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="border p-4 rounded-xl hover:shadow-lg hover:scale-[101%] hover:-z-0 transition duration-300 flex flex-col justify-between bg-white">
      <img src={product.image} alt={product.title} className="h-48 aspect-ratio: 1 / 1 w-full object-contain" />
      <section className=" h-25">

      <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
     <button
  onClick={addToCart}
  className="mt-4 bg-appleBlue text-white px-4 py-2 rounded-md hover:bg-appleBlueHover transition duration-300 active:scale-95"
>
  Add to Cart
</button>

        </section>
    </div>
  );
}
