import React from 'react'
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { v4 as uuidv4 } from 'uuid';


const Banner = () => {
  
   const offer = ["free smaple on every order","Get free shipping and return on all order","Sign up to avail 10% discount on your first purchase"]
  const slides= [{"image":"https://media.kohlsimg.com/is/image/kohls/hp2-d-20220615-gpo-bkg"},{"image":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/16e52ae5-d21b-4f1f-9c4a-8392c3a9592d1654099056613-Workwear_Desk.jpg"},{"image":"https://media.kohlsimg.com/is/image/kohls/hp2-d-20220531-weddings-bkg"}]
  return (<>
   <div style={{"height":"80px"}} >
   <Carousel infiniteLoopg showThumbs={false}>
      {offer.map((slide) => {
        return <Box key={ uuidv4()} bg='tomato' h='80px' w='100%'  p={4} color='white' >
        {slide}
      </Box>
        //  <h2  style={{"backgorundColor":"gray"}} >{slide}</h2>;
      })}
    </Carousel>
   </div>
   
    </>
  )
}

export default Banner
{/* <Image src={slide.image} height="auto" width="800px" />; */}