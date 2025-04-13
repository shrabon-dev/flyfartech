import Image from "next/image";
import Button from '@mui/material/Button';
import Hero from "../components/Hero";
import ImageBox from "../components/ImageBox";
import HotDeal from "../components/HotDeal";

export default function Home() {
  return (
    <>
        <Hero/>
        <ImageBox/>
        <HotDeal/>
    </>
  );
}
