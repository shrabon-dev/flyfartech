"use client"
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import imgOne from '../assets/images/sliderimg3.webp';
import imgTwo from '../assets/images/sliderimg4.webp';
import imgThree from '../assets/images/sliderimg5.webp';
export default function ImageBox() {
  return (
    <>
        <Container maxWidth={"lg"} sx={{marginBlock:'2rem'}}>
            <Box style={{width:'100%',height:'200px',display:'block',objectFit:'cover',borderRadius:'16px',overflow:'hidden'}}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <Image style={{width:'100%',height:'200px',display:'block',objectFit:'cover',borderRadius:'16px'}} src={imgOne} alt="promotion img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image style={{width:'100%',height:'200px',display:'block',objectFit:'cover',borderRadius:'16px' }}  src={imgTwo} alt="promotion img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image style={{width:'100%',height:'200px',display:'block',objectFit:'cover',borderRadius:'16px' }}  src={imgThree} alt="promotion img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image style={{width:'100%',height:'200px',display:'block',objectFit:'cover',borderRadius:'16px' }}  src={imgOne} alt="promotion img"/>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Container>
    </>
  )
}
