"use client";
import { Box, Container, Fade, IconButton } from "@mui/material";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay  } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/navigation";

import imgOne from "../assets/images/sliderimg3.webp";
import imgTwo from "../assets/images/sliderimg4.webp";
import imgThree from "../assets/images/sliderimg5.webp";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useInView } from "react-intersection-observer";

export default function ImageBox() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,     // % of item visible to trigger (0.2 = 20%)
  });
  return (
    <Box ref={ref} sx={{bgcolor:'primary.light'}}>
        <Container maxWidth={"lg"} sx={{ paddingBlock: "2rem" }}>
          <Box position="relative">
            {/* Custom Nav Buttons */}
            <Box sx={{position:'absolute',bottom:'0',right:'0',width:{xs:'100px',sm:'130px'},borderTopLeftRadius:'50px',height:'40px',paddingTop:'10px',bgcolor:'primary.light',zIndex:'99',}}>
                <IconButton
                ref={prevRef}
                sx={{
                    position: "absolute",
                    top: "60%",
                    background:'transparent',
                    left: '24%',
                    padding:{xs:'2px',sm:'4px'},
                    zIndex: 2,
                    transform: "translateY(-50%)",
                    borderLeft:'1px solid #aaaaaa',
                    "&:hover": { backgroundColor: "#f0f0f0" },
                }}
                >
                <WestIcon />
                </IconButton>
                <IconButton
                ref={nextRef}
                sx={{
                    position: "absolute",
                    top: "60%",
                    right: '14%',
                    background:'transparent',
                    zIndex: 2,
                    padding:{xs:'2px',sm:'4px'},
                    transform: "translateY(-50%)",
                    borderRight:'1px solid #aaaaaa',
                    "&:hover": { backgroundColor: "#f0f0f0"},
                }}
                >
                <EastIcon />
                </IconButton>
            </Box>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}  
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {[imgOne, imgTwo, imgThree, imgOne].map((img, index) => (
                <SwiperSlide key={index}>
                    <Fade direction="up" in={inView} timeout={400}>
                      <Image
                        src={img}
                        alt="promotion img"
                        style={{
                          width: "100%",
                          height: "200px",
                          display: "block",
                          objectFit: "cover",
                          borderRadius: "16px",
                        }}
                      />
                  </Fade>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
    </Box>
  );
}
