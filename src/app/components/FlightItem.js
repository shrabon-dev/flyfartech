'use client';
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { GiAirplaneArrival } from "react-icons/gi";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import bg from '../assets/images/BG.png';
import Image from "next/image";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import WorkIcon from '@mui/icons-material/Work';
import DetailsofFlight from "./DetailsofFlight";
export default function FlightItem({ type, onClick, flightDetails }) {
        const [age, setAge] = useState('');
        const handleChange = (event) => {
          setAge(event.target.value);
        };
  return (
    <>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
          <Box sx={{bgcolor:'white',width:'80%',padding:'10px',borderRadius:'12px'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',}}>
              <Box sx={{width:'22%',}}>
              <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
              <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                  Biman Bangladesh
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                BG-435
              </Typography>
              </Box>
              <Box sx={{width:'32%',paddingLeft:'16px',}}>
              <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                  DAC
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                Hazrat Shahjalal Intl Airport
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                11.45
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.main',paddingTop:'6px'}}>
                Tue 15 Apr 2025
              </Typography>
              </Box>
              <Box sx={{width:'14%',textAlign:'left',}}>
                {type == 'one-way' ? 
                    <AirplanemodeActiveIcon sx={{fontSize:'76px',rotate:'90deg',color:'secondary.main',cursor:'pointer'}}/>
                :
                <>
                    <AirplanemodeActiveIcon sx={{fontSize:'76px',rotate:'90deg',color:'secondary.main',cursor:'pointer'}}/>
                    <AirplanemodeActiveIcon  sx={{
                        fontSize: '76px',
                        transform: 'rotate(-90deg)',
                        fill: 'transparent',
                        stroke: '#32D095',
                        marginTop: '-40px',
                        position:'relative',
                        cursor:'pointer',
                        right: '-10px',
                        strokeWidth: .51,
                    }}/>
                </>
                }
          
              </Box>
              <Box sx={{width:'32%',paddingLeft:'16px',}}>
              <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                  CXB
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                COX's Bazar Airport
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                13.00
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.main',paddingTop:'6px'}}>
                Tue 15 Apr 2025
              </Typography>
              </Box>
            </Box>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{marginTop:'20px',}}>
            <Box sx={{width:'25%',textAlign:'center'}}>
              <Box >
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                1h 15m
              </Typography>
              <Box sx={{width:'100px',height:'2px',margin:'auto',bgcolor:'secondary.dark',display:'block',position:'relative'}}>
                <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',left:'-10px'}}></Box>
                <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',right:'-10px'}}></Box>
              </Box>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                Non Stop
              </Typography>
              </Box>
            </Box>
            <Box sx={{width:'25%',}}>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                Refundable
              </Typography>
            </Box>
            <Box sx={{width:'25%',}}>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
               Class- Economy
              </Typography>
            </Box>
            <Box sx={{width:'25%',}}>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',paddingTop:'6px',display:'flex',alignItems:'center',gap:'5px'}}>
              <WorkIcon style={{ fontSize:'16px' }}/>  20 Kg
              </Typography>
            </Box>
            </Stack>
         
          </Box>
          <Box sx={{width:'20%',borderRadius:'12px',backgroundColor:'white',padding:'10px',position:'relative',  "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderLeft: "2px dotted",
                        borderColor: "secondary.light",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                      },}}>
          <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginTop:'8px',textAlign:'right'}}>
              ৳ 11,280
          </Typography>
          <Typography variant="body2" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'14px',textDecoration:'line-through',color:'secondary.main',textAlign:'right'}}>
                ৳ 12,398
          </Typography>
          <Box sx={{textAlign:'center',paddingBlock:'20px'}}>
            <Button sx={{textAlign:"center",borderRadius:'50px',fontFamily:'PTRootUIWebMedium',bgcolor:'secondary.dark',fontSize:'12px',cursor:'pointer',zIndex:'9'}} variant="contained">Book Now</Button>
            <Button onClick={() => onClick(flightDetails)} sx={{textAlign:"center",color:'secondary.dark',fontFamily:'PTRootUIWebMedium',paddingTop:'10px',fontSize:'12px',cursor:'pointer',zIndex:'9'}} variant="text">Fight Details <ArrowRightIcon /></Button>
          </Box>
          </Box>
        </Stack>
   
    </>
  )
}
