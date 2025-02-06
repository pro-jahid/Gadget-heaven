const getStoredCardList = () =>{
    const storedListStr = localStorage.getItem('card-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return [];
    }
}

const addToStoredCardList = (id) =>{
    const storedList = getStoredCardList();
    if(storedList.includes(id)){
        console.log(id,'already exits in the Card List')
        
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('card-list',storedListStr)
    }
}

const removeToStoredCardList = (id) =>{
    const storedList = getStoredCardList();
    
    const restCartItem = storedList.filter(item => item !== id)
    const storedListStr = JSON.stringify(restCartItem);
        localStorage.setItem('card-list',storedListStr)
    
}


const getStoredWishList = () =>{
    const storedListStr = localStorage.getItem('card-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) =>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id,'already exits in the Wish List')
        
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
    }
}


export {addToStoredCardList,addToStoredWishList, getStoredWishList, getStoredCardList, removeToStoredCardList}