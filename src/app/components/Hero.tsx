"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
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
  const tabsData = [
    { label: "FLIGHT", tabs: "FLIGHT",icon:<LocalAirportOutlinedIcon sx={{color:'white',fontSize:'18px',marginBottom:'0px',marginRight:'6px'}}/> },
    { label: "HOTEL", tabs: "HOTEL",icon:<MapsHomeWorkIcon sx={{color:'white',fontSize:'18px',marginBottom:'0px',marginRight:'6px'}}/> },
    { label: "TOUR", tabs: "TOUR",icon:<TravelExploreIcon sx={{color:'white',fontSize:'18px',marginBottom:'0px',marginRight:'6px'}}/> },
    { label: "VISA", tabs: "VISA",icon:<AirplaneTicketIcon sx={{color:'white',fontSize:'18px',marginBottom:'0px',marginRight:'6px'}}/> },
  ];
  const [value, setValue] = useState(0);
  const [panel, setPanel] = useState(tabsData[0].tabs);
  const [tripType, setTripType] = useState('Round-Way');



  // Individual states
  const [adult, setAdult] = useState([]);
  const [child, setChild] = useState([]);
  const [infant, setInfant] = useState([]);
  const [travelClass, setTravelClass] = useState([]);

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setPanel(tabsData[newValue].tabs);
  };

  return (
    <section className="hero">
      <Container maxWidth="xl" sx={{ marginBottom: "4rem" }}>
        <Box
          sx={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            borderRadius: "8px",
            backgroundPosition: "center",
            minHeight: 600,
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
                  bgcolor: "secondary.main",
                  borderRadius: "50px",
                  minHeight: "44px",
                }}
              >
                <Tabs
                 value={value}
                 onChange={handleChange} 
                  TabIndicatorProps={{ style: { display: "none" } }}
                  sx={{ marginTop: "6px", minHeight: "44px" }}
                >
                  {tabsData.map((tab, index) => (
                    <Tab
                    icon={tab.icon}
                      key={index}
                      label={tab.label} 
                      sx={{
                        bgcolor:
                        value === index ? "secondary.dark" : "transparent",
                        color: "white",
                        padding: "5px 20px",
                        borderRadius: "50px",
                        fontFamily: "PTRootUIWebLight",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        textTransform: "capitalize",
                        minHeight: "36px",
                        fontWeight: "bold",
                        mx: 1,
                        transition: "0.3s ease",
                        "&:hover": {
                          color: "white",
                          bgcolor: "secondary.dark",
                        },
                        "&.Mui-selected": {
                          color: "white",
                          border: "none",
                        },
                        "&.Mui-focusVisible": {
                          color: "white",
                          border: "none",
                        },
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
            </Stack>

            {/* Panel Start*/}
            {panel == 'FLIGHT' ?
                <Stack
                  sx={{ marginBlock: "2rem" }}
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                >
                  {/* Left Panel */}
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "calc(100% - 360px)",
                      bgcolor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      position: "relative",
                      
                    }}
                  >
                    {/* round way navs tabs */}
                    <Stack className="round-way-tabs" direction="row" alignItems="center" flexWrap="wrap" sx={{marginBottom:'16px',gap:'16px'}}>
                      <Box onClick={()=>setTripType('round-way')} sx={{display:'flex',alignItems:'center',gap:'8px',cursor:'pointer'}}>
                        <Box sx={{width:'16px',height:'16px',bgcolor:'secondary.light',border:"2px solid",borderColor:'secondary.dark',borderRadius:'100%'}}></Box>
                        <Typography sx={{fontSize:'14px',fontWeight:'bold',color:'secondary.main',fontFamily:'PTRootUIWebBold'}}> 
                          Round-Way
                        </Typography>
                      </Box>
                      <Box onClick={()=>setTripType('one-way')} sx={{display:'flex',alignItems:'center',gap:'8px',cursor:'pointer'}}>
                        <Box sx={{width:'16px',height:'16px',bgcolor:'secondary.light',border:"2px solid",borderColor:'secondary.dark',borderRadius:'100%'}}></Box>
                        <Typography sx={{fontSize:'14px',fontWeight:'bold',color:'secondary.main',fontFamily:'PTRootUIWebBold'}}> 
                          One-Way
                        </Typography>
                      </Box>
                      <Box onClick={()=>setTripType('multi-city')} sx={{display:'flex',alignItems:'center',gap:'8px',cursor:'pointer'}}>
                        <Box sx={{width:'16px',height:'16px',bgcolor:'secondary.light',border:"2px solid",borderColor:'secondary.dark',borderRadius:'100%'}}></Box>
                        <Typography sx={{fontSize:'14px',fontWeight:'bold',color:'secondary.main',fontFamily:'PTRootUIWebBold'}}> 
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
                      maxWidth: "360px",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderLeft: "2px dotted",
                        borderColor: "secondary.light",
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
                      <Box sx={{width:'32%'}}>
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
                          options={names}
                        />
                      </Box>
                      <Box sx={{width:'32%'}}>
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
                          options={names}
                        />
                      </Box>
                      <Box sx={{width:'32%'}}>
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
                            options={names}
                          />
                      </Box>
                      <Box sx={{width:'100%',marginTop:'16px'}}>
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
                            options={names}
                          />
                      </Box>
                      <Box sx={{width:'100%',marginTop:'62px'}}>
                        <Button variant="contained" sx={{width:'100%',marginBlock:'16px',bgcolor:'secondary.main'}}>Search For Flight</Button>
                      </Box>
                      {tripType == 'multi-city' &&
                        <Box sx={{width:'100%',marginTop:'8px'}}>
                        <Button variant="contained" sx={{width:'100%',bgcolor:'secondary.main'}}>Add City</Button>
                      </Box>
                      }
                    </Stack>
                  </Box>
                </Stack>
            :
               <>

                  <FormCard panelType={panel}/>
               </>
            }
            {/* Panel End*/}

          </Container>
        </Box>
      </Container>
    </section>
  );
}
