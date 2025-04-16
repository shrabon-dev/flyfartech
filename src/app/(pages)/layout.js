"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import 'swiper/css';
import { Provider } from "react-redux";
import { store } from "../store";
import Head from "next/head";
import favicon from '../assets/images/favicon62.png';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <Head>
          <link rel="icon" href='/images/favicon62.png' />
          </Head>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Provider store={store} >
            <ThemeProvider theme={theme}>
                  <Header/>
                  {children}
                  <Footer/>
            </ThemeProvider>
            </Provider>
          </body>
    </html>
  );
}
