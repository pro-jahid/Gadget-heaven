import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardList, removeToStoredCardList } from "../Utilities/Utilities";
import CartList from "../CartList/CartList";
import { CartContext } from "../Route/Route";

const Dashboard = () => {
  // const {readList} = useContext(CartContext);
  // console.log(readList);
  
  const allBooks = useLoaderData();
  console.log(allBooks);

  const [readList, setReadList] = useState([]);

  const handleRemoveCart = (id) => {
    
    removeToStoredCardList(id)
    const storedCardList = getStoredCardList();
    const cardList = allBooks.filter((book) =>
      storedCardList.includes(book.product_id)
    );
    setReadList(cardList);
  }

  useEffect(() => {
    const storedCardList = getStoredCardList();

    const cardList = allBooks.filter((book) =>
      storedCardList.includes(book.product_id)
    );
    setReadList(cardList);
  }, []);
  return (
    <div>
      <div className=" bg-purple-600 text-center px-6 py-[80px] text-white mb-[60px]">
        <h1 className="md:text-5xl text-2xl font-bold leading-tight">
          Dashboard
        </h1>
        <p className="mt-4 text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex items-center gap-5 justify-center">
          <button className="cursor-pointer mt-6 px-10 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Cart
          </button>
          <button className="border border-white cursor-pointer mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition">
            Wishlist
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center container mx-auto py-10">
        <div>
          <h2 className="text-2xl font-bold">Cart</h2>
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Total Cost: $999.99</h2>
          </div>
          <div>
            <button className="cursor-pointer px-6 py-3 border border-purple-600  bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Sort by Price
            </button>
          </div>
          <div>
            <button className="border border-purple-600 py-3 cursor-pointer px-6 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition">
            Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {readList.map((product) => (
          <CartList product={product} key={product.id} handleRemoveCart={handleRemoveCart}></CartList>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
