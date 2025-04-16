'use client';
import { Box, Button, Collapse, Fade, FormControl, Grow, InputLabel, MenuItem, OutlinedInput, Paper, Select, Slide, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
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
import dayjs from "dayjs";
export default function DetailsofFlight({type, flightDetails, onClose}) {
  const goArrival = flightDetails?.segments?.go[0] || null;
  const backArrival = flightDetails?.segments?.back[0] || null;

  const [selectedSegment, setSelectedSegment] = useState("go");
  const [segmentData, setSegmentData] = useState(goArrival); // default to "go"
  const handleGoClick = () => setSelectedSegment("go");
  const handleBackClick = () => setSelectedSegment("back");
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



  useEffect(() => {
    if (selectedSegment === "go") {
      setSegmentData(goArrival);
    } else {
      setSegmentData(backArrival);
    }
  }, [selectedSegment, goArrival, backArrival]);
  // console.log(segmentData)
  const priceSummery =  flightDetails?.pricebreakdown[0];
  console.log('datas ',priceSummery)


  return (
    <>
    <Fade in={true} timeout={1000}>
    <Box sx={{ width:'100%',height:'100vh',display:'block',bgcolor:'#10101050',position:'fixed',right:'0',top:'-0px',zIndex:'99',padding:'0'}}>
      <Box   ref={popupRef} sx={{ width:{xs:'100%',md:'80%',lg:'70%',xl:'60%'},height:'100%%',marginLeft:'auto',display:'block',bgcolor:'white',boxShadow:'0 0 10px 0 #00000010',}}>
            <Box  sx={{ width:'100%',height:'90vh',overflow:'auto',scrollbarWidth: 'none','&::-webkit-scrollbar': {display: 'none',},marginLeft:'auto',display:'block',bgcolor:'white',boxShadow:'0 0 10px 0 #00000010',zIndex:'99',paddingInline:{xs:'10px',sm:'30px'} }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
                  <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
                    <Box sx={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',}}>
                      <Box sx={{width:{xs:'48%',sm:'20%'},}}>
                      <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
                      <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                        {flightDetails.careerName}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                        BG-435
                      </Typography>
                      </Box>
                      {/* GO ARRIVAL FLIGHT START */}
                      <Box sx={{width:{xs:'48%',sm:'25%'},}}>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                        {segmentData?.arrival}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                        {segmentData?.arrivalAirport}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                        {dayjs(segmentData?.arrivalTime).format("HH.mm")}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.main',paddingTop:'6px'}}>
                         {dayjs(segmentData?.arrivalTime).format("ddd DD MMM YYYY")}
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'48%',sm:'10%'},textAlign:'left',}}>
                        {type == 'one-way' ? 
                            <AirplanemodeActiveIcon sx={{fontSize:'76px',rotate:'90deg',color:'secondary.main',cursor:'pointer'}}/>
                        :
                        <>
                            <AirplanemodeActiveIcon  onClick={handleGoClick} sx={{fontSize:'76px',rotate:'90deg',strokeWidth:.31,color:'secondary.main',cursor:'pointer', fill: selectedSegment === 'go' ? '#32D095' : 'transparent',stroke: selectedSegment === 'go' ? 'transparent' : '#32D095',}}/>
                            <AirplanemodeActiveIcon  onClick={handleBackClick} sx={{
                                fontSize: '76px',
                                transform: 'rotate(-90deg)',
                                fill: selectedSegment === 'back' ? '#32D095' : 'transparent',
                                stroke: selectedSegment === 'back' ? 'transparent' : '#32D095',
                                marginTop: '-40px',
                                position:'relative',
                                cursor:'pointer',
                                right: '-10px',
                                strokeWidth: .31,
                            }}/>
                        </>
                        }
                  
                      </Box>
                      {/* BACK ARRIVAL FLIGHT START */}

                      <Box sx={{width:{xs:'48%',sm:'30%'},textAlign:'right',}}>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                      {segmentData?.departure}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                      {segmentData?.departureAirport}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                       {dayjs(segmentData?.departureTime).format("HH.mm")}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.main',paddingTop:'6px'}}>
                       {dayjs(segmentData?.departureTime).format("ddd DD MMM YYYY")}
                      </Typography>
                      </Box>
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} sx={{marginTop:'20px',}}>
                    <Box sx={{width:{xs:'48%',sm:'25%'},textAlign:'center'}}>
                      <Box >
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                      {flightDetails.goflightduration}
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
                       {flightDetails.refundable}
                      </Typography>
                    </Box>
                    <Box sx={{width:{xs:'48%',sm:'25%'},}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                      {flightDetails.class}
                      </Typography>
                    </Box>
                    <Box sx={{width:{xs:'48%',sm:'25%'},textAlign:'right'}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',paddingTop:'6px',display:'flex',justifyContent:'end',alignItems:'center',gap:'5px'}}>
                      <WorkIcon style={{ fontSize:'16px' }}/>  {flightDetails.bags} Kg
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
                      {flightDetails.careerName}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                        BG-435
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'12px',color:'secondary.main'}}>
                        Operated By  {flightDetails.career}
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'32%'},}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                      Depart
                      </Typography>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                        {goArrival?.departure}
                      
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center'}}>
                        <Typography component="span" variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}> {goArrival?.departureLocation}|</Typography>{goArrival?.departureAirport}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',alignItems:'center',gap:'5px'}}>
                      <Typography component="span" variant="body1" > {dayjs(goArrival?.departureTime).format("HH.mm")}</Typography>   {dayjs(goArrival?.departureTime).format("ddd DD MMM YYYY")}
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'14%'},paddingBlock:{xs:'20px',sm:'0px'},textAlign:'left',}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',textAlign:'center'}}>
                      {goArrival?.flightduration}
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
                      {goArrival?.arrival}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center',justifyContent:'start'}}>
                        <Typography component="span" variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}>{goArrival?.arrivalLocation} |</Typography>{goArrival?.arrivalAirport}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',justifyContent:'start',alignItems:'center',gap:'5px'}}>
                      <Typography component="span" variant="body1"> {dayjs(goArrival?.arrivalTime).format("HH.mm")}</Typography>   {dayjs(goArrival?.arrivalTime).format("ddd DD MMM YYYY")}
                      </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Stack>  
                <Box sx={{borderTop:'1px solid #404040',marginTop:'20px',textAlign:'center'}}>
                  <Typography sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',position:'relative',top:'-14px',textTransform:'uppercase',bgcolor:'secondary.main',borderRadius:'50px',padding:'4px 10px',color:'white',display:'inline-block'}}>RETURN FLIGHT</Typography>
                </Box>
                {/* Return Flight Start */}
                <Stack direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
                  <Box sx={{bgcolor:'white',width:'100%',padding:'10px',borderRadius:'12px'}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
                      <Box sx={{width:{xs:'100%',sm:'15%'},}}>
                      <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
                      <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                      {flightDetails.careerName}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                        BG-435
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'12px',color:'secondary.main'}}>
                        Operated By  {flightDetails.career}
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'32%'},}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
                      Depart
                      </Typography>
                      <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                        {backArrival?.departure}
                      
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center'}}>
                        <Typography component="span" variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}> {backArrival?.departureLocation}|</Typography>{backArrival?.departureAirport}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',alignItems:'center',gap:'5px'}}>
                      <Typography component="span" variant="body1"> {dayjs(backArrival?.departureTime).format("HH.mm")}</Typography>   {dayjs(backArrival?.departureTime).format("ddd DD MMM YYYY")}
                      </Typography>
                      </Box>
                      <Box sx={{width:{xs:'100%',sm:'14%'},paddingBlock:{xs:'20px',sm:'0px'},textAlign:'left',}}>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',textAlign:'center'}}>
                      {backArrival?.flightduration}
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
                      {backArrival?.arrival}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',display:'flex',alignItems:'center',justifyContent:'start'}}>
                        <Typography component="span" variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.main'}}>{backArrival?.arrivalLocation} |</Typography>{backArrival?.arrivalAirport}
                      </Typography>
                      <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'14px',color:'secondary.dark',paddingTop:'6px',display:'flex',justifyContent:'start',alignItems:'center',gap:'5px'}}>
                      <Typography component="span" variant="body1"> {dayjs(backArrival?.arrivalTime).format("HH.mm")}</Typography>   {dayjs(backArrival?.arrivalTime).format("ddd DD MMM YYYY")}
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
                    <TableList datas={flightDetails}/>
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
                  <Typography sx={{fontSize:'24px',fontFamily:'PTRootUIWebMedium',color:'white'}}>Fare:  {Number(priceSummery.BaseFare) + Number(priceSummery.Tax) - Number(priceSummery.Discount)} ৳</Typography>
                </Box>
                <Box >
                  <Button onClick={()=>onClose()} sx={{textAlign:"center",borderRadius:'50px',fontFamily:'PTRootUIWebMedium',bgcolor:'secondary.dark',fontSize:'12px',cursor:'pointer',zIndex:'9'}} variant="contained">Book & Hold</Button>
                </Box>
              </Box>
            </Box>

      </Box>
    
    </Box>
    </Fade>
    </>
  )
}
