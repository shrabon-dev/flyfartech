import Image from "next/image";
import Button from '@mui/material/Button';
import Hero from "../components/Hero";
import ImageBox from "../components/ImageBox";
import HotDeal from "../components/HotDeal";
import favicon from '../assets/images/favicon62.png'; 

export const metadata = {
  title: "Home | Fly Far Tech",
  keywords: "travel, flight booking, hotel booking, visa services",
  description: "Welcome to the homepage of Fly Far Tech.",
  icons: {
    icon: [
      { url: favicon, type: "image/x-icon" },
      { url: favicon, type: "image/png", sizes: "32x32" },
      { url: favicon, type: "image/svg+xml", sizes: "any" },
    ],
  },
};

export default function Home() {
  
  return (
    <>
        <Hero/>
        <ImageBox/>
        <HotDeal/>
    </>
  );
}
