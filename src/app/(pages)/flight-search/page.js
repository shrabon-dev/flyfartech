'use client'
import { useEffect, useState } from "react";
import DetailsofFlight from "../../components/DetailsofFlight";
import FlightItem from "../../components/FlightItem";
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, Slider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup, selectPopupState } from  '../../store/PopupSlice';
import { selectTripType } from  '../../store/TripTypeSlice';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Filter from "../../components/Filter";
import Image from "next/image";
import bs from '../../assets/images/BS.png'
import bg from '../../assets/images/BG.png'
export default function FlightSearch() {


  const dispatch = useDispatch();
  const { popupOpen, selectedFlight } = useSelector(selectPopupState);
  // const { selectTripTypeValue } = useSelector(selectTripType);
  const [flights, setFlights] = useState([]);
  const tripType = useSelector(selectTripType);

  const handleOpenPopup = (flightDetails) => {
    dispatch(openPopup(flightDetails)); 
  };

  const handleClosePopup = () => {
    dispatch(closePopup()); 
  };

  useEffect(() => {
    console.log('tripType', tripType)
    const fetchFlights = async () => {
      const fileName = tripType === 'One-Way' ? 'ONEWAY.json' : 'ROUNDWAY.json';
      const res = await fetch(`/data/${fileName}`);
      const data = await res.json();
      setFlights(data);
    };
    fetchFlights();
  }, [tripType]);
  return (
    <>
      <Box className="flight-search" sx={{ paddingBlock: "20px", backgroundColor: "primary.light" }}>
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
              <Box className="search__header" sx={{bgcolor:'secondary.main', color:'white', padding:'10px 20px', borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
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
              <Box className="search__header" sx={{bgcolor:'white', color:'secondary.dark', borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}}>
                <Box sx={{display:'flex',alignItems:'center',gap:'6px',width:'50%',transitionDuration:'.3s',padding:'10px 20px',cursor:'pointer','&:hover':{bgcolor:'primary.light',}}}>
                  <Box>
                    <Image style={{width:'40px',height:'40px'}} src={bs} alt="bs img"/>
                  </Box>
                  <Box>
                    <Typography sx={{fontFamily:'',fontSize:'14px',color:'primary.dark'}}>BS</Typography>
                    <Typography sx={{fontFamily:'',fontSize:'14px',color:'secondary.main'}}>BDT 14205.00</Typography>
                  </Box>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',gap:'6px',width:'50%',transitionDuration:'.3s',padding:'10px 20px',cursor:'pointer','&:hover':{bgcolor:'primary.light', }}}>
                  <Box>
                    <Image style={{width:'40px',height:'40px'}} src={bg} alt="bg img"/>
                  </Box>
                  <Box>
                    <Typography sx={{fontFamily:'',fontSize:'14px',color:'primary.dark'}}>BG</Typography>
                    <Typography sx={{fontFamily:'',fontSize:'14px',color:'secondary.main'}}>BDT 21205.00</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="item_list">
                 {flights?
                 (
                  Array.from({ length: 6 }).map((_, i) => (
                    <FlightItem flightDetails={flights} onClick={handleOpenPopup}  type={tripType}/> 
                  ))
                 )
                 :
                  (
                    Array.from({ length: 6 }).map((_, i) => (
                      <Skeleton
                        key={i}
                        variant="rectangular"
                        width="100%"
                        height="150px"
                        sx={{ mb: 2 }}
                        />
                    ))
                  )
                 }
                   
                {/* <FlightItem flightDetails={flights} onClick={handleOpenPopup}  type={tripType}/>              
                <FlightItem flightDetails={flights} onClick={handleOpenPopup}  type={tripType}/>              
                <FlightItem flightDetails={flights} onClick={handleOpenPopup}  type={tripType}/>              
                <FlightItem flightDetails={flights} onClick={handleOpenPopup}  type={tripType}/>              
                <FlightItem flightDetails={flights} onClick={handleOpenPopup}  type={tripType}/>               */}
              </Box>
            </Grid>
          </Grid>
        
          
        </Container>
      </Box>
      {popupOpen && (
        <DetailsofFlight
          flightDetails={selectedFlight} // Pass the selected flight details
          onClose={handleClosePopup}
          type={tripType}
        />
      )}
    </>
  )
}
