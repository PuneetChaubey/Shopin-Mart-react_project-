import React from 'react'
import style from "../Style/Footer.module.css"

import styles from "https://kit.fontawesome.com/8a4521f153.js";
const Footer = () => {
  return (
    
      <>
      <div className={style.footer_div}>
      <div className={style.cont}>
      <div className={style.div_1}  >
       <p className=''>CONNECT WITH US</p>
       <i className="fa-brands fa-facebook"></i>
       <i className="fa-brands fa-twitter"></i>
       <i className="fa-brands fa-instagram"></i>
       <i className="fa-brands fa-quora"></i>
       <i className="fa-brands fa-youtube"></i>
       </div>
       <div className={style.line}></div>
      <div className={style.div_2}>
      <p>GET OUR APP</p>
       <i className="fa-solid fa-barcode"></i>
       <p>Scan the Code to download the Shoppers cart App</p>
       
      </div>
      </div>
       </div>

      </>
  )
}

export default Footer
