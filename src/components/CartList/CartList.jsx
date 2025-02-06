import { useEffect } from "react";
import { removeToStoredCardList } from "../Utilities/Utilities";
import { RxCross1 } from "react-icons/rx";

const CartList = ({product, handleRemoveCart}) => {
  
  
  return (
    <div className="container mx-auto flex items-center justify-between p-6 mb-8 bg-gray-50 rounded-lg shadow-lg w-full">
    <div className="flex items-center space-x-6">
      <div className="min-w-36 h-24 rounded-lg overflow-hidden bg-gray-300">
        <img src={product.product_image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-bold text-lg my-2">{product.product_title}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="font-semibold text-md">Price: ${product.price}</p>
      </div>
    </div>
    <button onClick={ () => handleRemoveCart(product.product_id)} className="text-red-500 border rounded-full p-2">
    <RxCross1 />
    </button>
  </div>
  );
};

export default CartList;
