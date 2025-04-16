'use client';
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
import dayjs from "dayjs";
export default function FlightItem({ type, onClick, flightDetails }) {
  const goArrival = flightDetails?.segments?.go[0] || null;
  const backArrival = flightDetails?.segments?.back[0] || null;

  const [selectedSegment, setSelectedSegment] = useState("go");
  const [segmentData, setSegmentData] = useState(goArrival); // default to "go"
  const handleGoClick = () => setSelectedSegment("go");
  const handleBackClick = () => setSelectedSegment("back");

  useEffect(() => {
    if (selectedSegment === "go") {
      setSegmentData(goArrival);
    } else {
      setSegmentData(backArrival);
    }
  }, [selectedSegment, goArrival, backArrival]);
 
  return (
    <>
      {flightDetails.careerName ?
      (
        <Stack direction={{xs:'column',md:'row'}} justifyContent={'space-between'} alignItems={'stretch'} sx={{marginTop:'10px'}}>
        <Box sx={{bgcolor:'white',width:{xs:'100%',md:'80%'},padding:'10px',borderRadius:'8px'}}>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
            <Box sx={{width:{xs:'48%',sm:'22%'},}}>
            <Image style={{width:'50px',height:'50px'}} src={bg} alt="bg"/>
            <Typography variant="body1" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',marginBlock:'8px'}}>
                {flightDetails.careerName}
            </Typography>
            <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
              BG-435
            </Typography>
            </Box>
            {/* GO ARRIVAL FLIGHT */}
            {segmentData &&
              <Box sx={{width:{xs:'48%',sm:'32%'},paddingLeft:'16px',}}>
              <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginBlock:'8px'}}>
                {segmentData.arrival}
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark'}}>
              {segmentData.arrivalAirport}
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
              {dayjs(segmentData?.arrivalTime).format("HH.mm")}
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'PTRootUIWebBold',fontSize:'12px',color:'secondary.main',paddingTop:'6px'}}>
              {dayjs(segmentData?.arrivalTime).format("ddd DD MMM YYYY")}
              </Typography>
              </Box>
            }
          

            <Box sx={{width:{xs:'48%',sm:'14%'},textAlign:'left',}}>
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
            {/* BACK ARRIVAL FLIGHT */}
            <Box sx={{width:{xs:'48%',sm:'32%'},paddingLeft:'16px',}}>
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
          <Stack direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} sx={{marginTop:'20px',}}>
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
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                {flightDetails.refundable}
                </Typography>
              </Box>
              <Box sx={{width:{xs:'48%',sm:'25%'},}}>
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.dark',paddingTop:'6px'}}>
                {flightDetails.class}
                </Typography>
              </Box>
              <Box sx={{width:{xs:'48%',sm:'25%'},}}>
                <Typography variant="body2" sx={{fontFamily:'PTRootUIWebMedium',fontSize:'12px',color:'secondary.main',paddingTop:'6px',display:'flex',alignItems:'center',gap:'5px'}}>
                <WorkIcon style={{ fontSize:'16px' }}/>  {flightDetails.bags} Kg
                </Typography>
              </Box>
          </Stack>
       
        </Box>
        <Box sx={{width:{xs:'100%',md:'20%'},borderRadius:'8px',backgroundColor:'white',padding:'10px',position:'relative',  "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderLeft: {xs:'none',md:"2px dotted #a0bbd130"},
                      borderTop: {xs:'1px dotted #a0bbd130',md:"none"},
                      borderColor: "secondary.light !important",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                    },}}>
        <Typography variant="h3" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'30px',color:'secondary.main',marginTop:'8px',textAlign:'right'}}>
            ৳ {flightDetails.customerPrice}
        </Typography>
        <Typography variant="body2" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'14px',textDecoration:'line-through',color:'secondary.main',textAlign:'right'}}>
              ৳ {flightDetails.BasePrice}
        </Typography>
        <Box sx={{textAlign:'center',paddingBlock:'20px'}}>
          <Button sx={{textAlign:"center",borderRadius:'50px',fontFamily:'PTRootUIWebMedium',bgcolor:'secondary.dark',fontSize:'12px',cursor:'pointer',zIndex:'9'}} variant="contained">Book Now</Button>
          <Button onClick={() => onClick(flightDetails)} sx={{textAlign:"center",color:'secondary.dark',fontFamily:'PTRootUIWebMedium',paddingTop:'10px',fontSize:'12px',cursor:'pointer',zIndex:'9'}} variant="text">Fight Details <ArrowRightIcon /></Button>
        </Box>
        </Box>
      </Stack>
      )
      :
      (
        <Skeleton
        variant="rectangular"
        width="100%"
        height="150px"
        sx={{ mb: 2,marginBlock:'20px',borderRadius:'8px' }}
        />
      )  
      }
      
    </>
  )
}
