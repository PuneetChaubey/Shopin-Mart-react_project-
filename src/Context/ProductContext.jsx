import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

export const ProductProvider = ({children})=>{
const [mensData, setMensData] = useState([])
const [kidsData, setKidsData] = useState([])
const [womensData, setWomensData] = useState([])
    const getMensData =()=>{
  axios.get("http://localhost:8080/mens")
  .then((res)=>{
    setMensData(res.data)
  })
    }

const getKidsData = ()=>{
  axios.get("http://localhost:8080/kidsData")
  .then((res)=>{
    setKidsData(res.data)
  })
}
const getWomensData = ()=>{
  axios.get("http://localhost:8080/womenData")
  .then((res)=>{
    setWomensData(res.data)
  })

}

    useEffect(() => {
     getMensData();
     getKidsData();
     getWomensData();
    }, [])
    


    return <ProductContext.Provider value={{womensData,mensData,kidsData}}>{children}</ProductContext.Provider>

}