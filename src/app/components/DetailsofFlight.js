'use client';
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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
import TableList from "../utils/TableList";
export default function DetailsofFlight({type, flightDetails, onClose}) {
  const popupRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        console.log("Clicked outside of popup, closing...");
        onClose();
      }
    };

    // Delay adding the event listener to prevent immediate close
    timeoutId = setTimeout(() => {
      window.addEventListener("click", handleClickOutside);
    }, 0);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);
  console.log("details of page:", flightDetails)
 
  return (
    <>
    <Box sx={{ width:'100%',height:'100vh',display:'block',bgcolor:'#10101050',position:'fixed',right:'0',top:'-0px',zIndex:'99',padding:'0'}}>
      <Box   ref={popupRef} sx={{ width:{xs:'100%',md:'80%',lg:'70%',xl:'60%'},height:'100%%',marginLeft:'auto',display:'block',bgcolor:'white',boxShadow:'0 0 10px 0 #00000010',}}>
            <Box  sx={{ width:'100%',height:'90vh',overflow:'auto',scrollbarWidth: 'none','&::-webkit-scrollbar': {display: 'none',},marginLeft:'auto',display:'block',bgcolor:'white',boxShadow:'0 0 10px 0 #00000010',zIndex:'99',paddingInline:{xs:'10px',sm:'30px'} }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
                  <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
                    <Box sx={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',}}>
                      <Box sx={{width:{xs:'48%',sm:'20%'},}}>
                      <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
                      <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                          Biman Bangladesh
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                        BG-435
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'48%',sm:'25%'},}}>
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
                      <Box sx={{width:{xs:'48%',sm:'10%'},textAlign:'left',}}>
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
                      <Box sx={{width:{xs:'48%',sm:'30%'},textAlign:'right',}}>
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
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} sx={{marginTop:'20px',}}>
                    <Box sx={{width:{xs:'48%',sm:'25%'},textAlign:'center'}}>
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
                    <Box sx={{width:{xs:'48%',sm:'25%'},}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px',textAlign:{xs:'right',sm:'left'}}}>
                        Refundable
                      </Typography>
                    </Box>
                    <Box sx={{width:{xs:'48%',sm:'25%'},}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                      Class- Economy
                      </Typography>
                    </Box>
                    <Box sx={{width:{xs:'48%',sm:'25%'},textAlign:'right'}}>
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
                {/* First Flight  Start*/}
                <Stack direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
                  <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
                      <Box sx={{width:{xs:'100%',sm:'15%'},}}>
                      <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
                      <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                          Biman Bangladesh
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                        BG-435
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'12px',color:'secondary.main'}}>
                        Operated By BS
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'32%'},}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                      Depart
                      </Typography>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                          CXB
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center'}}>
                        <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}>Dhaka, BD |</Typography>Hazrat Shahjalal Intl Airport
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',alignItems:'center',gap:'5px'}}>
                      <Typography variant="body2"> 11.45 </Typography>  Tue 15 Apr 2025
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'14%'},paddingBlock:{xs:'20px',sm:'0px'},textAlign:'left',}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',textAlign:'center'}}>
                        1h 15m
                      </Typography>
                        <Box sx={{width:'100px',height:'2px',margin:'auto',bgcolor:'secondary.dark',display:'block',position:'relative'}}>
                          <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',left:'-10px'}}></Box>
                          <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',right:'-10px'}}></Box>
                        </Box>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'38%'},textAlign:'left',paddingLeft:{xs:'0px',sm:'20px'}}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                      Arrival
                      </Typography>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                          DAC
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center',justifyContent:'start'}}>
                        <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}>Coxs Bazar , BD |</Typography>Hazrat Shahjalal Intl Airport
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',justifyContent:'start',alignItems:'center',gap:'5px'}}>
                      <Typography variant="body2"> 11.45 </Typography>  Tue 15 Apr 2025
                      </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Stack>  
                <Box sx={{borderTop:'1px solid #404040',marginTop:'20px',textAlign:'center'}}>
                  <Typography sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',position:'relative',top:'-14px',textTransform:'uppercase',bgcolor:'secondary.main',borderRadius:'50px',padding:'4px 10px',color:'white',display:'inline-block'}}>RETURN FLIGHT</Typography>
                </Box>
                {/* Return Flight Start */}
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
                  <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
                    <Box sx={{display:'flex',alignItems:'center',flexWrap:'wrap',justifyContent:'space-between',}}>
                      <Box sx={{width:{xs:'100%',sm:'15%'},}}>
                      <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
                      <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                          Biman Bangladesh
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                        BG-435
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'12px',color:'secondary.main'}}>
                        Operated By BS
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'32%'},}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                      Depart
                      </Typography>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                          DAC
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center'}}>
                        <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}>Dhaka, BD|</Typography>Hazrat Shahjalal Intl Airport
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',alignItems:'center',gap:'5px'}}>
                      <Typography variant="body2"> 11.45 </Typography>  Tue 15 Apr 2025
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'14%'},paddingBlock:{xs:'20px',sm:'0px'},textAlign:'left',}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',textAlign:'center'}}>
                        1h 15m
                      </Typography>
                        <Box sx={{width:'100px',height:'2px',margin:'auto',bgcolor:'secondary.dark',display:'block',position:'relative'}}>
                          <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',left:'-10px'}}></Box>
                          <Box sx={{width:'10px',height:'10px',borderRadius:'50%',bgcolor:'secondary.dark',position:'absolute',top:'-4px',right:'-10px'}}></Box>
                        </Box>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'38%'},textAlign:'left',paddingLeft:{xs:'0px',sm:'20px'}}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                      Arrival
                      </Typography>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                          CXB
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center',justifyContent:'start'}}>
                        <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}>Coxs Bazar , BD |</Typography>Hazrat Shahjalal Intl Airport
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',justifyContent:'start',alignItems:'center',gap:'5px'}}>
                      <Typography variant="body2"> 11.45 </Typography>  Tue 15 Apr 2025
                      </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
                  {/* Heading Start  */}
                  <Box sx={{bgcolor:'secondary.light',padding:'2px 10px',marginTop:'20px'}}>
                    <Typography variant="h6" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main',textTransform:'uppercase'}}>Fare Details</Typography>
                  </Box>
                {/* Heading End  */}
                {/* Price List Star */}
                <Box sx={{paddingBlock:'20px'}}>
                    {/* Table List Component */}

                    <TableList/>
                </Box>
                {/* Fare Policy Start */}
                  <Box sx={{bgcolor:'secondary.light',padding:'2px 10px',marginTop:'20px'}}>
                    <Typography variant="h6" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main',textTransform:'uppercase'}}>Fare Policy</Typography>
                  </Box>
                  <Stack direction={'row'} justifyContent={'space-between'} sx={{flexWrap:'wrap',padding:'10px 0'}}>
                    <Box sx={{width:{xs:'100%',sm:'48%'},margin:'10px 0'}}>
                      <Typography sx={{bgcolor:'secondary.light',padding:'4px 20px',color:'secondary.dark',display:'inline-block',fontFamily:'PTRootUIWebMedium',fontSize:'14px'}}>
                          Cancellation
                      </Typography>
                      <Typography sx={{color:'secondary.dark',fontFamily:'PTRootUIWebMedium',fontSize:'14px', padding:'10px 0'}}>
                      Refund Amount = Paid Amount - Airline Cancellation Fee
                      </Typography>
                    </Box>
                    <Box sx={{width:{xs:'100%',sm:'48%'},margin:'10px 0'}}>
                      <Typography sx={{bgcolor:'secondary.light',padding:'4px 20px',color:'secondary.dark',display:'inline-block',fontFamily:'PTRootUIWebMedium',fontSize:'14px'}}>
                      Re-Issue
                      </Typography>
                      <Typography sx={{color:'secondary.dark',fontFamily:'PTRootUIWebMedium',fontSize:'14px', padding:'10px 0'}}>
                      Re-issue Fee = Airline’s Fee + Fare Difference
                      </Typography>
                    </Box>
                    <Box sx={{width:{xs:'100%',sm:'48%'},margin:'10px 0'}}>
                      <Typography sx={{bgcolor:'secondary.light',padding:'4px 20px',color:'secondary.dark',display:'inline-block',fontFamily:'PTRootUIWebMedium',fontSize:'14px'}}>
                      Refund
                      </Typography>
                      <Typography sx={{color:'secondary.dark',fontFamily:'PTRootUIWebMedium',fontSize:'14px', padding:'10px 0'}}>
                      Refund Fee = Airline’s Fee + Fare Difference
                      </Typography>
                    </Box>
                    <Box sx={{width:{xs:'100%',sm:'48%'},margin:'10px 0'}}>
                      <Typography sx={{bgcolor:'secondary.light',padding:'4px 20px',color:'secondary.dark',display:'inline-block',fontFamily:'PTRootUIWebMedium',fontSize:'14px'}}>
                      Void
                      </Typography>
                      <Typography sx={{color:'secondary.dark',fontFamily:'PTRootUIWebMedium',fontSize:'14px', padding:'10px 0'}}>
                      Void Fee = Airline’s Fee + Fare Difference
                      </Typography>
                    </Box>

                  </Stack>
            </Box>
        
            <Box sx={{height:'10vh',bgcolor:'secondary.main',width:'100%',padding:'20px 30px'}}>
              <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box >
                  <Typography sx={{fontSize:'14px',fontFamily:'PTRootUIWebMedium',color:'white'}}>Total (include VAT)</Typography>
                  <Typography sx={{fontSize:'24px',fontFamily:'PTRootUIWebMedium',color:'white'}}>Fare: 11078 ৳</Typography>
                </Box>
                <Box >
                  <Button onClick={()=>onClose()} sx={{textAlign:"center",borderRadius:'50px',fontFamily:'PTRootUIWebMedium',bgcolor:'secondary.dark',fontSize:'12px',cursor:'pointer',zIndex:'9'}} variant="contained">Book & Hold</Button>
                </Box>
              </Box>
            </Box>

      </Box>
    
    </Box>
    </>
  )
}
