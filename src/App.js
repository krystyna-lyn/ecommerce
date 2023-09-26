import React, { useEffect, useState } from 'react';
import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item?.cart);
  }


  console.log(cart)

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <div>
      <Navbar />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};




export default App