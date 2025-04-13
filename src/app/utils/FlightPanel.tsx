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
export default function FlightPanel() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <> 
        <Box sx={{width:'100%',height:'100%',backgroundColor:'white',borderRadius:'8px',padding:'10px'}}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}  gap={2}>
                <Box sx={{width:'35%'}}>
                <Typography variant="body2" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebLight',fontSize:'14px'}}>
                    From
                </Typography>
                <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                    DAC
                </Typography>
                <Box sx={{ minWidth: 290,position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
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
                          if (selected.length === 0) {
                            return <em>location one </em>;
                          }
              
                           
                        }}
                      >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 290,position:'relative',display:'flex',alignItems:'center',gap:'0px',marginTop:'8px'}}>
                    <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><CalendarMonthIcon /></Box>
                    {/* <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
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
                      >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
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
                                padding: '4px',
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
                    <GiAirplaneArrival style={{fontSize:'44px'}}/>
                    <GiAirplaneDeparture style={{fontSize:'44px',rotate:'-90deg'}}/>
                </Box>
                <Box sx={{width:'35%'}}>
                <Typography variant="body2" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebLight',fontSize:'14px'}}>
                    From
                </Typography>
                <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'center',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                    DAC
                </Typography>
                <Box sx={{ minWidth: 290,position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
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
                          if (selected.length === 0) {
                            return <em>location one </em>;
                          }
              
                           
                        }}
                      >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 290,position:'relative',display:'flex',alignItems:'center',gap:'0px',marginTop:'8px'}}>
                    <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><CalendarMonthIcon /></Box>
                  
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
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
                                padding: '4px',
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
            </Stack>
        </Box>
</>
  )
}
