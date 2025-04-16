import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from "@mui/material";
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
import TripWay from "./TripWay";
export default function FlightPanel({trip_type}) {
    
  return (
    <> 
        <Box sx={{width:'100%',height:'100%',borderRadius:'8px',padding:'10px'}}>
        {trip_type == 'round-way' ?
          <TripWay type={trip_type}/>
        :  
          (trip_type == 'one-way' ?
            <TripWay type={trip_type}/>
            :
            <>
            {trip_type == 'multi-city' ?
              <>
              <TripWay type={trip_type}/>
              <TripWay type={trip_type}/>
              <TripWay type={trip_type}/>
              </>
            :
              <>
              <TripWay type={trip_type}/>
              </>
            }
            </>
          )
        }
          
        </Box>
</>
  )
}
