import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { v4 as uuidv4 } from 'uuid';
import style from "../Style/Products.module.css"
import { Button } from '@chakra-ui/react';


const Cart = () => {
  const {cartData,removeFromCart} = useContext(CartContext);

  const cartRemove =(id)=>{
    removeFromCart(id)
  }


  return (
    <>
    <div className={style.mens_product_div} >
    {
      cartData.map((p)=><div key={uuidv4()} className={style.item_div}>
     <div>
     <img className={style.image} src={p.img_url} />
     </div>
      <div className={style.name}>
      <p>{p.name}</p>
        <p>{p.sale_price}</p>
        <Button colorScheme='orange' size='xs'  onClick={()=>{cartRemove(p.id)}}>Remove</Button>
      </div>
      
      </div>)
    }
    
  </div>
  <div  style={{"height":"50px", "marginTop":"25px" ,"backgroundColor":"pink", }}>
  <h1>{`Total Item in the Cart is ${cartData.length} `}</h1>
  </div>
    </>
  )
}

export default Cart