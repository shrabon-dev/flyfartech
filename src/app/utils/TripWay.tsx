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
export default function TripWay({type}) {
        const [age, setAge] = useState('');
        const handleChange = (event) => {
          setAge(event.target.value);
        };
  return (
    <>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}  gap={2} sx={{marginTop:'10px'}}>
          <Box sx={{width:'35%'}}>
          <Typography variant="body2" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebLight',fontSize:'14px'}}>
              From
          </Typography>
          <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
              DAC
          </Typography>
          <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
              <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><LocationPinIcon /></Box>
              <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  input={<OutlinedInput   notched={false} />}
                  sx={{
                    backgroundColor: 'secondary.light',
                    borderTopRightRadius:'4px',borderBottomRightRadius:'4px',
                    borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px',
                    padding: '4px',
                    fontFamily: 'PTRootUIWebRegular',
                    fontSize: '14px',
                    height: '30px',
                    textTransform: 'capitalize',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return <>ShaJalal</>;
                    }
                  
                    return selected;
                  }}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
          </Box>
          <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px',marginTop:'8px'}}>
              <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><CalendarMonthIcon /></Box>
           
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker']}  sx={{width:'100%',padding:'0px',overflow:'visible'}}>
                  <DatePicker  label=""
                    slotProps={{
                      textField: {
                        InputProps: {
                          notched: false,
                        },
                        sx: {
                          width: '100%',
                          height: '30px',
                          backgroundColor: 'secondary.light',
                          borderTopRightRadius: '4px',
                          borderBottomRightRadius: '4px',
                          borderTopLeftRadius: '0px',
                          borderBottomLeftRadius: '0px',
                          fontFamily: 'PTRootUIWebRegular',
                          fontSize: '14px',
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                          '& input': {
                            padding: 0,
                            paddingLeft: '8px',
                            fontSize: '14px',
                            textTransform: 'capitalize',
                          },
                        },
                      },
                    }}/>
                </DemoContainer>
              </LocalizationProvider>
          </Box>
          </Box>
          <Box sx={{width:'25%',textAlign:'center'}}>
            {type == 'one-way' ? 
                <AirplanemodeActiveIcon sx={{fontSize:'96px',rotate:'90deg',color:'secondary.main'}}/>
            :
            <>
                <AirplanemodeActiveIcon sx={{fontSize:'96px',rotate:'90deg',color:'secondary.main'}}/>
                <AirplanemodeActiveIcon  sx={{
                    fontSize: '96px',
                    transform: 'rotate(-90deg)',
                    fill: 'transparent',
                    stroke: '#32D095',
                    marginTop: '-50px',
                    position:'relative',
                    right: '-10px',
                    strokeWidth: .51,
                }}/>
            </>
            }
      
          </Box>
          <Box sx={{width:'35%'}}>
          <Typography variant="body2" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebLight',fontSize:'14px'}}>
              From
          </Typography>
          <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
              DAC
          </Typography>
          <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
              <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><LocationPinIcon /></Box>
              <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  input={<OutlinedInput   notched={false} />}
                  sx={{
                    width: '100%',
                    backgroundColor: 'secondary.light',
                    borderTopRightRadius:'4px',borderBottomRightRadius:'4px',
                    borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px',
                    padding: '4px',
                    fontFamily: 'PTRootUIWebRegular',
                    fontSize: '14px',
                    height: '30px',
                    textTransform: 'capitalize',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return <>ShaJalal</>;
                    }
                  
                    return selected;
                  }}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
          </Box>
          <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px',marginTop:'8px'}}>
              <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><CalendarMonthIcon /></Box>
            
              <LocalizationProvider dateAdapter={AdapterDayjs}  >
                <DemoContainer components={['DatePicker']} sx={{width:'100%',padding:'0px',overflow:'visible'}}>
                  <DatePicker  label=""
                    slotProps={{
                      textField: {
                        InputProps: {
                          notched: false,
                        },
                        sx: {
                          height: '30px',
                          backgroundColor: 'secondary.light',
                          borderTopRightRadius: '4px',
                          borderBottomRightRadius: '4px',
                          borderTopLeftRadius: '0px',
                          borderBottomLeftRadius: '0px',
                          fontFamily: 'PTRootUIWebRegular',
                          fontSize: '14px',
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                          '& input': {
                            width: '100%',
                            padding: 0,
                            paddingLeft: '8px',
                            fontSize: '14px',
                            textTransform: 'capitalize',
                          },
                        },
                      },
                    }}/>
                </DemoContainer>
              </LocalizationProvider>
          </Box>
          </Box>
        </Stack>
    </>
  )
}
