import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { v4 as uuidv4 } from 'uuid';
import style from "../Style/Products.module.css"
import Banner from './Banner';
import { Button } from '@chakra-ui/react';
import { CartContext } from '../Context/CartContext';

const Women = () => {
  const {womensData} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext)
  

const cart = (data)=>{
   addToCart(data)
  
}
  return (<>
  <Banner/>
  
  <div className={style.mens_product_div}>
    {
      womensData.map((p)=><div key={uuidv4()} className={style.item_div}>
     <div>
     <img className={style.image} src={p.img_url} />
     </div>
      <div className={style.name}>
      <p>{p.name}</p>
        <p>{p.sale_price}</p>
        <Button colorScheme='orange' size='xs'  onClick={()=>{cart(p)}}>Add</Button>
      </div>
      </div>)
    }
  </div>
  </>
  )
}

export default Women