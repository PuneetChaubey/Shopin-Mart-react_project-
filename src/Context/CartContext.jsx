import { createContext, useState } from "react";

export const CartContext =  createContext();

export const CartProvider = ({children})=>{

    const [cartData, setCartData] = useState([]);

    const addToCart = (data)=>{

        setCartData([ ...cartData, data]);

    }
const removeFromCart = (id)=>{

  setCartData(cartData.filter((p)=>{
    return (p.id!=id)
}))

}

    return <CartContext.Provider value={{removeFromCart,addToCart,cartData}}>{children}</CartContext.Provider>


}