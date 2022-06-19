import React from 'react'
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from './Banner';
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
  const offer = ["free smaple on every order","Get free shipping and return on all order","Sign up to avail 10% discount on your first purchase"]
  const slides= [{"image":"https://media.kohlsimg.com/is/image/kohls/hp2-d-20220615-gpo-bkg"},{"image":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/16e52ae5-d21b-4f1f-9c4a-8392c3a9592d1654099056613-Workwear_Desk.jpg"},{"image":"https://media.kohlsimg.com/is/image/kohls/hp2-d-20220531-weddings-bkg"}]
  return (<>
     <Banner/>
    <div style={{"height":"250px"}}>
     <Carousel infiniteLoop showThumbs={false} >
       {slides.map((slide) => {
         return <Image key={uuidv4()} src={slide.image} border={ `6px solid black`} height="250px" width="800px" marginTop="0px" />;
       })}
     </Carousel>
     </div>
     <img src={"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"} />
     </>
  )
}

export default Home