import { useEffect, useState } from "react";
import Product from "../../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") 
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl py-12">Explore Cutting-Edge Gadgets</h1>
        <div className="flex">
      <div className="w-1/4 p-4 bg-gray-100 min-h-screen">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-purple-500 text-white rounded cursor-pointer">All Product</li>
          <li className="p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">Laptops</li>
          <li className="p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">Phones</li>
          <li className="p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">Accessories</li>
          <li className="p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">Smart Watches</li>
          <li className="p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">MacBook</li>
          <li className="p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300">iPhone</li>
        </ul>
      </div>

      <div className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
