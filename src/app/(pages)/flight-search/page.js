'use client'
import { useEffect, useState } from "react";
import DetailsofFlight from "../../components/DetailsofFlight";
import FlightItem from "../../components/FlightItem";
import { Box, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup, selectPopupState } from  '../../store/PopupSlice';
export default function FlightSearch() {
  const dispatch = useDispatch();
  const { popupOpen, selectedFlight } = useSelector(selectPopupState);

  const handleOpenPopup = (flightDetails) => {
    console.log("Opening popup with flight details:", flightDetails);
    dispatch(openPopup(flightDetails)); // Open the popup
  };

  const handleClosePopup = () => {
    dispatch(closePopup()); // Close the popup
  };

  const flightData = {
    airline: "Biman Bangladesh",
    flightNumber: "BG-435",
    from: "DAC",
    to: "CXB",
    departureTime: "11.45",
    arrivalTime: "13.00",
    date: "Tue 15 Apr 2025",
  };

  return (
    <>
      <Box className="flight-search" sx={{ paddingBlock: "60px", backgroundColor: "primary.light" }}>
        <Container maxWidth="lg">
          <Grid direction={'row'} container spacing={2}>
            <Grid size={3} sx={{
              display: { xs: 'none', lg: 'block' },}}>
              <Box className="filter_bar" sx={{bgcolor:'white', color:'secondary.dark',width:'100%',height:'100vh',boxShadow:'0 0 50px #10101010',border:'1px solid #cccccc', padding:'10px 20px', borderRadius:'5px'}}>
                <h2>Filter</h2>
              </Box>
            </Grid>
            <Grid size={
              {
                lg: 9,
                md: 12,
              }
            }>
              <Box className="search__header" sx={{bgcolor:'secondary.main', color:'white', padding:'40px 20px', borderRadius:'5px'}}>

              </Box>
              <Box className="item_list">
                <FlightItem flightDetails={flightData} onClick={handleOpenPopup}   type={'round-way'}/>              
                <FlightItem flightDetails={flightData} onClick={handleOpenPopup}  type={'round-way'}/>              
                <FlightItem flightDetails={flightData} onClick={handleOpenPopup}  type={'round-way'}/>              
                <FlightItem flightDetails={flightData} onClick={handleOpenPopup}  type={'round-way'}/>              
                <FlightItem flightDetails={flightData} onClick={handleOpenPopup}  type={'round-way'}/>              
              </Box>
            </Grid>
          </Grid>
        
          
        </Container>
      </Box>
      {popupOpen && (
        <DetailsofFlight
          flightDetails={selectedFlight} // Pass the selected flight details
          onClose={handleClosePopup}
          type={'round-way'}
        />
      )}
    </>
  )
}
