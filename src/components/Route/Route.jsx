// import { createContext, useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import Products from "../Home/Products/Products";
// import { getStoredCardList, removeToStoredCardList } from "../Utilities/Utilities";
// import { useLoaderData } from "react-router-dom";

// export const CartContext = createContext();

 const Route = () => {
//     const allBooks = useLoaderData();
//     console.log(allBooks);
  
//     const [readList, setReadList] = useState([]);
  
//     const handleRemoveCart = (id) => {
      
//       removeToStoredCardList(id)
//       const storedCardList = getStoredCardList();
//       const cardList = allBooks.filter((book) =>
//         storedCardList.includes(book.product_id)
//       );
//       setReadList(cardList);
//     }
  
//     useEffect(() => {
//       const storedCardList = getStoredCardList();
  
//       const cardList = allBooks.filter((book) =>
//         storedCardList.includes(book.product_id)
//       );
//       setReadList(cardList);
//     }, []);
  return (
    <div>
      <Hero></Hero>
      <Products></Products>
      {/* <CartContext.Provider >
        <Products></Products>
      </CartContext.Provider> */}
    </div>
  );
};

export default Route;
