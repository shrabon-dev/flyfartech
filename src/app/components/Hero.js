"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Fade,
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Slide,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import bg from "../assets/images/mainbannerimg.webp";
import CustomSelect from "../utils/CustomSelect";
import FlightPanel from "../utils/FlightPanel";
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FormCard from "./FormCard";
import Link from "next/link";
import { useDispatch, useSelector, } from 'react-redux';
import { setTravelTripType, selectTripType } from '../store/TripTypeSlice'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function Hero() {
  const [value, setValue] = useState(0);
  const tabsData = [
    { label: "FLIGHT", tabs: "FLIGHT",icon:<LocalAirportOutlinedIcon sx={{fontSize:{xs:'14px',sm:'18px'},marginBottom:'0px !important',marginRight:{xs:'2px',sm:'6px'}}}/> },
    { label: "HOTEL", tabs: "HOTEL",icon:<MapsHomeWorkIcon sx={{fontSize:{xs:'14px',sm:'18px'},marginBottom:'0px !important',marginRight:{xs:'2px',sm:'6px'}}}/> },
    { label: "TOUR", tabs: "TOUR",icon:<TravelExploreIcon sx={{fontSize:{xs:'14px',sm:'18px'},marginBottom:'0px !important',marginRight:{xs:'2px',sm:'6px'}}}/> },
    { label: "VISA", tabs: "VISA",icon:<AirplaneTicketIcon sx={{fontSize:{xs:'14px',sm:'18px'},marginBottom:'0px !important',marginRight:{xs:'2px',sm:'6px'}}}/> },
  ];

  const [panel, setPanel] = useState(tabsData[0].tabs);
  const [tripType, setTripType] = useState('Round-Way');
  const dispatch = useDispatch(); 
  const selectedTripType = useSelector(selectTripType);




  // Individual states
  const [adult, setAdult] = useState([]);
  const [child, setChild] = useState([]);
  const [infant, setInfant] = useState([]);
  const [travelClass, setTravelClass] = useState([]);

  const adalts = [
    "1 Adalt",
    "2 Adalt",
    "3 Adalt",
    "4 Adalt",
    "5 Adalt",
    "6 Adalt",
    "7 Adalt",
    "8 Adalt",
    "9 Adalt",
  ];
  const childs = [
    "1 Child",
    "2 Child",
    "3 Child",
    "4 Child",
    "5 Child",
    "6 Child",
    "7 Child",
    "8 Child",
    "9 Child",
  ];
  const infants = [
    "1 Infant",
    "2 Infant",
    "3 Infant",
    "4 Infant",
    "5 Infant",
  ];
  const travelClasses = [
    "Economy",
    "Premium Economy",
    "Business",
    "Premium Business",
    "First Class",
    "Premium First Class",
  ];
  const handleChange = (e, newValue) => {
    setValue(newValue);
    setPanel(tabsData[newValue].tabs);
  };

  const handleTripType = (value) => {
    if (tripType !== value) {
      setTripType(value);  
      dispatch(setTravelTripType(value)); 
    }
   
  };
  return (
    <section className="hero">
      <Box sx={{bgcolor:'primary.light'}}>
        <Container maxWidth="xl" sx={{ paddingBottom: "4rem" }}>
          <Box
            sx={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              borderRadius: "8px",
              backgroundPosition: "center",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container maxWidth="lg" sx={{ marginBlock: "2rem" }}>
              {/* Tabs */}
              <Stack
                sx={{ marginBlock: "2rem" }}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    bgcolor: "white",
                    borderRadius: "50px",
                    minHeight: {xs:'34px',md:"44px"},
                    width: "fit-content !important",
                  }}
                >
                  <Tabs
                  value={value}
                  onChange={handleChange} 
                    TabIndicatorProps={{ style: { display: "none" } }}
                    sx={{ marginTop: "6px", minHeight:  {xs:'34px',md:"44px"} }}
                  >
                    {tabsData.map((tab, index) => (
                      <Tab
                      icon={
                        <Typography variant="body2" sx={{color:value === index ? "secondary.light" : "secondary.dark",display:'flex',fontSize:{xs:'14px',sm:'18px'},marginBottom:'0px !important',marginRight:{xs:'2px',sm:'6px'}}}>{tab.icon}</Typography>
                      }
                        key={index}
                        label={tab.label} 
                        sx={{
                          bgcolor:value === index ? "secondary.dark" : "transparent",
                          color: "secondary.main",
                          padding: {xs:'0px 2px',md:'"5px 20px"'},
                          borderRadius: "50px",
                          fontFamily: "PTRootUIWebLight",
                          fontSize: {xs:'8px',sm:'10px',md:'14px'},
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          textTransform: "capitalize",
                          minHeight: {xs:'28px',md:"36px"},
                          minWidth: {xs:"auto",sm:"90px",md:"150px"},
                          fontWeight: "bold",
                          mx: 1,
                          transition: "0.3s ease",
                          "&:hover": {
                            color: "white",
                            bgcolor: "secondary.main",
                          },
                          "&.Mui-selected": {
                            color: "white",
                            border: "none",
                            bgcolor: "secondary.main",
                          },
                          "&.Mui-focusVisible": {
                            color: "white",
                            border: "none",
                            bgcolor: "secondary.main",
                          },
                        }}
                      />
                    ))}
                  </Tabs>
                </Box>
              </Stack>

              {/* Panel Start*/}
              {panel == 'FLIGHT' ?
                  <Grow  in={panel} timeout={400}>
                  <Stack
                    sx={{ marginBlock: "2rem" }}
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="stretch"
                  >
                    {/* Left Panel */}
                    <Box
                      sx={{
                        width:{xs:'100%',sm:'100%',md:'calc(100% - 360px)'},
                        maxWidth:{xs:'100%',sm:'100%',md:'calc(100% - 360px)'},
                        bgcolor: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        position: "relative",
                        
                      }}
                    >
                      {/* round way navs tabs */}
                      <Stack className="round-way-tabs" direction="row" alignItems="center" flexWrap="wrap" sx={{marginBottom:'16px',gap:{xs:'4px',md:'16px'}}}>
                        <Box onClick={()=>handleTripType('round-way')} sx={{display:'flex',alignItems:'center',gap:{xs:'4px',sm:'8px'},cursor:'pointer'}}>
                          <Box sx={{width:{xs:'8px',sm:'16px'},height:{xs:'8px',sm:'16px'},bgcolor: tripType === 'round-way' ? 'secondary.main' : 'secondary.light',border:"2px solid",borderColor:'secondary.dark',borderRadius:'100%'}}></Box>
                          <Typography sx={{fontSize:{xs:'10px',sm:'14px'},fontWeight:'bold',color:'secondary.main',fontFamily:'PTRootUIWebBold'}}> 
                            Round-Way
                          </Typography>
                        </Box>
                        <Box onClick={()=>handleTripType('one-way')} sx={{display:'flex',alignItems:'center',gap:{xs:'4px',sm:'8px'},cursor:'pointer'}}>
                          <Box sx={{width:{xs:'8px',sm:'16px'},height:{xs:'8px',sm:'16px'},bgcolor: tripType === 'one-way' ? 'secondary.main' : 'secondary.light',border:"2px solid",borderColor:'secondary.dark',borderRadius:'100%'}}></Box>
                          <Typography sx={{fontSize:{xs:'10px',sm:'14px'},fontWeight:'bold',color:'secondary.main',fontFamily:'PTRootUIWebBold'}}> 
                            One-Way
                          </Typography>
                        </Box>
                        <Box onClick={()=>handleTripType('multi-city')} sx={{display:'flex',alignItems:'center',gap:{xs:'4px',sm:'8px'},cursor:'pointer'}}>
                          <Box sx={{width:{xs:'8px',sm:'16px'},height:{xs:'8px',sm:'16px'},bgcolor: tripType === 'multi-city' ? 'secondary.main' : 'secondary.light',border:"2px solid",borderColor:'secondary.dark',borderRadius:'100%'}}></Box>
                          <Typography sx={{fontSize:{xs:'10px',sm:'14px'},fontWeight:'bold',color:'secondary.main',fontFamily:'PTRootUIWebBold'}}> 
                            Multi-City
                          </Typography>
                        </Box>
                      </Stack>
                      {/* Tabs or Panel Start */}
                        <FlightPanel trip_type={tripType} />
                      {/* Tabs or Panel End */}
                    </Box>
                    {/* Right Panel */}
                    <Box
                      sx={{
                        bgcolor: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        position: "relative",
                        maxWidth: {xs:'100%',md:'360px'},
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          borderLeft: {xs:'none',sm:"2px dotted #a0bbd1"},
                          borderTop: {xs:'1px dotted #a0bbd1',sm:"none"}, 
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        },
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        flexWrap="wrap"
                        
                      >
                        <Box sx={{width:'32%',zIndex:99}}>
                          <CustomSelect
                            label="Adult"
                            value={adult}
                            onChange={(e) =>
                              setAdult(
                                typeof e.target.value === "string"
                                  ? e.target.value.split(",")
                                  : e.target.value
                              )
                            }
                            options={adalts}
                          />
                        </Box>
                        <Box sx={{width:'32%',zIndex:99}}>
                          <CustomSelect
                            label="Child"
                            value={child}
                            
                            onChange={(e) =>
                              setChild(
                                typeof e.target.value === "string"
                                  ? e.target.value.split(",")
                                  : e.target.value
                              )
                            }
                            options={childs}
                          />
                        </Box>
                        <Box sx={{width:'32%',zIndex:99}}>
                            <CustomSelect
                              label="Infant"
                              value={infant}
                              onChange={(e) =>
                                setInfant(
                                  typeof e.target.value === "string"
                                    ? e.target.value.split(",")
                                    : e.target.value
                                )
                              }
                              options={infants}
                            />
                        </Box>
                        <Box sx={{width:'100%',marginTop:'16px',zIndex:99}}>
                            <CustomSelect
                              label="Class"
                              value={travelClass}
                              onChange={(e) =>
                                setTravelClass(
                                  typeof e.target.value === "string"
                                    ? e.target.value.split(",")
                                    : e.target.value
                                )
                              }
                              options={travelClasses}
                            />
                        </Box>
                        <Box sx={{width:'100%',marginTop:'62px',zIndex:2}}>
                          <Link href={'/flight-search'} passHref>
                              <Button  variant="contained" sx={{width:'100%',marginBlock:'16px',bgcolor:'secondary.main'}}>Search For Flight</Button>
                          </Link>
                        </Box>
                        {tripType == 'multi-city' &&
                          <Box sx={{width:'100%',marginTop:'8px'}}>
                          <Button variant="contained" sx={{width:'100%',bgcolor:'secondary.main'}}>Add City</Button>
                        </Box>
                        }
                      </Stack>
                    </Box>
                  </Stack>
                  </Grow>
              :
                <>

                    <FormCard panelType={panel}/>
                </>
              }
              {/* Panel End*/}

            </Container>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
