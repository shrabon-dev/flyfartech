"use client";

import React, { useState } from "react";
import { Box, Collapse, Container, Fade, Grow, Slide, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgOne from "../assets/images/hotdeal/hotdealflightimg1.webp";
import imgTwo from "../assets/images/hotdeal/hotdealflightimg2.webp";
import imgThree from "../assets/images/hotdeal/hotdealflightimg3.webp";
import imgFour from "../assets/images/hotdeal/hotdealgroupfareimg1.webp";
import imgFive from "../assets/images/hotdeal/hotdealgroupfareimg2.webp";
import imgSix from "../assets/images/hotdeal/hotdealgroupfareimg3.webp";
import imgSeven from "../assets/images/hotdeal/hotdealtourimg1.webp";
import imgEight from "../assets/images/hotdeal/hotdealtourimg2.webp";
import imgNine from "../assets/images/hotdeal/hotdealtourimg3.webp";
import imgTen from "../assets/images/hotdeal/hotdealvisaimg1.webp";
import imgEleven from "../assets/images/hotdeal/hotdealvisaimg2.webp";

const tabsData = [
  {
    label: "FLIGHT",
    images: [imgOne, imgTwo, imgThree, imgOne],
  },
  {
    label: "GROUP FARE",
    images: [imgFour,imgFive ,imgSix, imgFour, imgSix],
  },
  {
    label: "TOUR",
    images: [imgSeven, imgEight, imgNine, imgTwo],
  },
  {
    label: "VISA",
    images: [imgTen, imgEleven, imgEight, imgSix],
  },
];

function CustomTabPanel({ children, value, index }) {
  return value === index ? <Box sx={{ mt: 2 }}>{children}</Box> : null;
}

export default function HotDeal() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="hotdeal">
      <Box sx={{bgcolor:'primary.light'}}>
          <Container maxWidth="lg" sx={{ paddingBlock: "2rem" }}>
            <div className="hotdeal__title">
              <Stack
                sx={{ marginBlock: "2rem" }}
                direction={{xs:'column', sm:'row'}}
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "secondary.dark",
                    fontFamily: "PTRootUIWebRegular",
                    fontSize: {xs:'16px', md:'24px'},
                    paddingBottom:{xs:'10px', md:'0px'},
                  }}
                >
                  Hot Deals
                </Typography>
                <Box sx={{ border: 1, borderColor: "divider",bgcolor: "secondary.main",borderRadius:'50px',minHeight:{xs:'30px',md:'44px'},width:{xs:'fit-content !important'}, }}>
                  <Tabs value={value} onChange={handleChange}  TabIndicatorProps={{ style: { display: "none" } }} sx={{marginTop:'6px',minHeight:{xs:'30px',md:'44px'},textTransform: "capitalize",}}>
                    {tabsData.map((tab, index) => (
                      <Tab key={index} label={tab.label}   sx={{
                        bgcolor: value === index ? "secondary.dark" : "transparent",
                        color: "white", 
                        padding: {xs:'0px 2px', md:'8px 12px'},
                        borderRadius: "50px",
                        fontFamily: "PTRootUIWebLight",
                        fontSize: {xs:'10px', md:'14px'},
                        textTransform: "capitalize",
                        minHeight:{xs:'24px', md:'38px'},
                        minWidth:{xs:'50px', md:'85px'},
                        fontWeight: "bold",
                        mx: 1,
                        transition: "0.3s ease",
                        "&:hover": {
                        color: "white",
                        bgcolor: "secondary.dark", 
                        },
                        "&.Mui-selected": {
                        color: "white",
                        border:'none',
                        },
                        "&.Mui-focusVisible": {
                        color: "white",
                        border:'none',
                        },
                      }}/>
                    ))}
                  </Tabs>
                </Box>
              </Stack>
            </div>

            <Box>
              {tabsData.map((tab, index) => (
                <CustomTabPanel key={index} value={value} index={index}>
                  <Swiper spaceBetween={50} slidesPerView={3} loop={true} breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    960: {
                      slidesPerView: 3,
                    },
                  }}>
                    {tab.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <Grow in={true} timeout={600}>
                        <Image
                          src={img}
                          alt={`promotion-${index}-${idx}`}
                          style={{
                            width: "100%",
                            height: "200px",
                            display: "block",
                            objectFit: "cover",
                            borderRadius: "16px",
                          }}
                        />
                        </Grow>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </CustomTabPanel>
              ))}
            </Box>
          </Container>
      </Box>
    </section>
  );
}
