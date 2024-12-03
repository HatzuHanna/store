import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Head from 'next/head';

export default function Home({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all products');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = async (category = 'all products') => {
    const res = await fetch(
      category === 'all products'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    setCategories(['all products', ...data]);
  };

  return (
    
    <div className="container max-w-[1200px] h[100dvh] mx-auto px-4 py-24">
      <Head>
        <title>AntStore</title>
      </Head>  
      <div className="my-4 flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black">
      {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
    </h1>
        <select
          className="border p-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <ProductList products={products} cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}
