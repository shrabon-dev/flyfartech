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
export default function DetailsofFlight({type}) {
  return (
    <>
      <Box sx={{ width:'50%',height:'100vh',display:'block',bgcolor:'white',position:'absolute',right:'0',top:'0',boxShadow:'0 0 10px 0 #00000010',zIndex:'99',paddingInline:'30px' }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
          <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',}}>
              <Box sx={{width:'20%',}}>
              <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
              <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                  Biman Bangladesh
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                BG-435
              </Typography>
              </Box>
              <Box sx={{width:'25%',}}>
              <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
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
              <Box sx={{width:'10%',textAlign:'left',}}>
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
              <Box sx={{width:'30%',textAlign:'right',}}>
              <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
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
            <Box sx={{width:'25%',textAlign:'right'}}>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',paddingTop:'6px',display:'flex',justifyContent:'end',alignItems:'center',gap:'5px'}}>
              <WorkIcon style={{ fontSize:'16px' }}/>  20 Kg
              </Typography>
            </Box>
            </Stack>
         
          </Box>
       
        </Stack>       

           {/* Heading Start  */}
           <Box sx={{bgcolor:'secondary.light',padding:'2px 10px',marginTop:'20px'}}>
              <Typography variant="h6" sx={{fontFamily:'PTRootUIWebBold',fontSize:'14px',color:'secondary.main',textTransform:'uppercase'}}>Flight Details</Typography>
           </Box>
           {/* Heading End  */}
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
          <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',}}>
              <Box sx={{width:'20%',}}>
              <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
              <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                  Biman Bangladesh
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                BG-435
              </Typography>
              </Box>
              <Box sx={{width:'25%',}}>
              <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
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
              <Box sx={{width:'10%',textAlign:'left',}}>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',textAlign:'center'}}>
                1h 15m
              </Typography>
                <Box sx={{width:'100px',height:'2px',margin:'auto',bgcolor:'secondary.dark',display:'block',position:'relative'}}>
                  <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',left:'-10px'}}></Box>
                  <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',right:'-10px'}}></Box>
                </Box>
              </Box>
              <Box sx={{width:'30%',textAlign:'right',}}>
              <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
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
          </Box>
        
       
          </Stack>  
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
            <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',}}>
                <Box sx={{width:'20%',}}>
                <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
                <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                    Biman Bangladesh
                </Typography>
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                  BG-435
                </Typography>
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                  Operated By BS
                </Typography>
                </Box>
                <Box sx={{width:'25%',}}>
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                 Depart
                </Typography>
                <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
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
                <Box sx={{width:'10%',textAlign:'left',}}>
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',textAlign:'center'}}>
                  1h 15m
                </Typography>
                  <Box sx={{width:'100px',height:'2px',margin:'auto',bgcolor:'secondary.dark',display:'block',position:'relative'}}>
                    <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',left:'-10px'}}></Box>
                    <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',right:'-10px'}}></Box>
                  </Box>
                </Box>
                <Box sx={{width:'30%',textAlign:'right',}}>
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                 Arrival
                </Typography>
                <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
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
            </Box>
          </Stack>
        
      </Box>
    </>
  )
}
