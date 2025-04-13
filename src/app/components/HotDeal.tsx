"use client";

import React, { useState } from "react";
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgOne from "../assets/images/sliderimg3.webp";
import imgTwo from "../assets/images/sliderimg4.webp";
import imgThree from "../assets/images/sliderimg5.webp";

const tabsData = [
  {
    label: "FLIGHT",
    images: [imgOne, imgTwo, imgThree, imgOne],
  },
  {
    label: "GROUP FARE",
    images: [imgThree,imgTwo ,imgOne, imgThree, imgOne],
  },
  {
    label: "TOUR",
    images: [imgTwo, imgThree, imgOne, imgTwo],
  },
  {
    label: "VISA",
    images: [imgThree, imgOne, imgTwo, imgThree],
  },
];

function CustomTabPanel({ children, value, index }: any) {
  return value === index ? <Box sx={{ mt: 2 }}>{children}</Box> : null;
}

export default function HotDeal() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="hotdeal">
      <Container maxWidth="lg" sx={{ marginBlock: "2rem" }}>
        <div className="hotdeal__title">
          <Stack
            sx={{ marginBlock: "2rem" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "secondary.dark",
                fontFamily: "PTRootUIWebRegular",
                fontSize: "24px",
              }}
            >
              Hot Deals
            </Typography>
            <Box sx={{ border: 1, borderColor: "divider",bgcolor: "secondary.main",borderRadius:'50px',minHeight:'44px' }}>
              <Tabs value={value} onChange={handleChange}  TabIndicatorProps={{ style: { display: "none" } }} sx={{marginTop:'6px',minHeight:'44px',textTransform: "capitalize",}}>
                {tabsData.map((tab, index) => (
                  <Tab key={index} label={tab.label}   sx={{
                    
                    bgcolor: value === index ? "secondary.dark" : "transparent",
                    color: "white", 
                    padding: "5px 20px",
                    borderRadius: "50px",
                    fontFamily: "PTRootUIWebLight",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    minHeight:'36px',
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
              <Swiper spaceBetween={50} slidesPerView={3}>
                {tab.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </CustomTabPanel>
          ))}
        </Box>
      </Container>
    </section>
  );
}
