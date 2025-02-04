import { Link } from "react-router-dom";

const Product = ({ product }) => {
    console.log(product);

    const { product_image, product_title, price, product_id } = product;
    
    return (
        <div className="p-4 rounded-lg shadow-lg bg-white h-[350px] flex flex-col justify-between">
            <img src={product_image} alt={product_title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{product_title}</h2>
            <p className="text-gray-700 mt-1 font-bold">Price: ${price}</p>
            <Link to={`product/${product_id}`}><button  className="mt-3 border border-purple-900 font-bold text-purple-900 py-2 px-4 rounded-full hover:bg-purple-200">View Details</button></Link>
        </div>
    );
};

export default Product;
