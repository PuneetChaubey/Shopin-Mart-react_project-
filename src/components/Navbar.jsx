import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Style/Navbar.module.css"
import styles from "https://kit.fontawesome.com/8a4521f153.js";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
  const {isAuth, logOut} = useContext(AuthContext)
  
  return (
    <div className={style.navbar_div}>
      <h2>Shopping Mart</h2>
      <Link className={style.navbar_link} to="/" >Home</Link>
      <Link className={style.navbar_link} to="/mens" >Mens</Link>
      <Link className={style.navbar_link} to="/womens" >Womens</Link>
      <Link className={style.navbar_link} to="/kids" >Kids</Link>
    
      <Link className={style.navbar_link} to="/cart" ><i className="fa-solid fa-cart-shopping"></i></Link>
      <Link className={style.navbar_link} to="/login"  onClick={()=>{logOut()}}>{isAuth ? "Logout": "Login"}</Link>
      
      
    </div>
  )
}

export default Navbar