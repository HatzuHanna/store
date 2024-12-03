import ProductItem from './ProductItem';

export default function ProductList({ products, cartItems, setCartItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}
