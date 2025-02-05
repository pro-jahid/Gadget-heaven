import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCardList } from "../Utilities/Utilities";

const ProductDetails = () => {
    const products = useLoaderData();  // Load all products from products.json
    const { product_id } = useParams();
    const product = products.find((item) => item.product_id === product_id);
    
    if (!product) {
        return (
            <div className="text-center py-10 text-red-600 text-xl">
                Product not found! 😢
            </div>
        );
    }

    const handleMarkAsRead = (id)=>{
        addToStoredCardList(id)
    }

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            {/* Header Section */}
            <div className="bg-purple-600 text-white py-10 text-center rounded-t-xl">
                <h1 className="text-3xl font-bold">Product Details</h1>
                <p className="mt-2 text-lg">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!
                </p>
            </div>

            {/* Product Card */}
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 flex gap-8">
                {/* Product Image */}
                <div className="w-1/3">
                    <img src={product.product_image} alt={product.product_title} className="w-full rounded-lg shadow-md" />
                </div>

                {/* Product Info */}
                <div className="w-2/3">
                    <h2 className="text-2xl font-bold">{product.product_title}</h2>
                    <p className="text-xl font-semibold text-gray-700 mt-2">Price: ${product.price}</p>

                    {/* Availability */}
                    <p className="mt-2">
                        {product.availability ? (
                            <span className="text-green-600 font-semibold bg-green-200 px-3 py-1 rounded-lg">In Stock</span>
                        ) : (
                            <span className="text-red-600 font-semibold bg-red-200 px-3 py-1 rounded-lg">Out of Stock</span>
                        )}
                    </p>

                    <p className="mt-4 text-gray-600">{product.description}</p>

                    {/* Specifications */}
                    <h3 className="mt-4 font-semibold text-lg">Specifications:</h3>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        {product.specification.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* Rating & Buttons */}
                    <div className="mt-4 items-center gap-4">
                        {/* Rating */}
                        <div className="mb-4">
                            <span className="font-semibold text-lg">Rating ⭐</span>
                            
                        </div>
                        <div className="mb-4">
                            <span className="ml-2 text-lg font-semibold mb-3">⭐⭐⭐⭐⭐  {product.rating}</span>
                        </div>

                        {/* Add to Cart Button */}
                       <div className="flex gap-8 items-center mb-3">
                       <button onClick={()=> handleMarkAsRead(product_id)} className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-700 transition cursor-pointer">
                            Add to Cart 🛒
                        </button>
                        <button className="text-2xl p-2 border rounded-full cursor-pointer">❤️</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;



