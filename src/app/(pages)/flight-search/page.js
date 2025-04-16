'use client'
import { useEffect, useState } from "react";
import DetailsofFlight from "../../components/DetailsofFlight";
import FlightItem from "../../components/FlightItem";
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, Slider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup, selectPopupState } from  '../../store/PopupSlice';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Filter from "../../components/Filter";
export default function FlightSearch() {


  const dispatch = useDispatch();
  const { popupOpen, selectedFlight } = useSelector(selectPopupState);

  const handleOpenPopup = (flightDetails) => {
    dispatch(openPopup(flightDetails)); 
  };

  const handleClosePopup = () => {
    dispatch(closePopup()); 
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
              <Filter/>
            </Grid>
            <Grid size={
              {
                lg: 9,
                sm: 12,
              }
            }>
              <Box className="search__header" sx={{bgcolor:'secondary.main', color:'white', padding:'10px 20px', borderRadius:'2px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <Box>
                    <SettingsRoundedIcon style={{fontSize:'38px'}}/>
                  </Box>
                  <Box>
                    <Typography sx={{fontFamily:'',fontSize:'14px',color:'primary.light'}}>DAC - CXB | Total 7 Flight</Typography>
                    <Typography sx={{fontFamily:'',fontSize:'14px',color:'primary.light'}}>14 April 2025 - 18 April 2025 | 4 Travelers</Typography>
                  </Box>
                </Box>
                <Box>
                    <Button sx={{textAlign:"center",borderRadius:'6px',fontFamily:'PTRootUIWebMedium',bgcolor:'secondary.dark',fontSize:'12px',cursor:'pointer',zIndex:'9'}} variant="contained">Filter</Button>
                </Box>
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
