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
import { GiAirplaneDeparture } from "react-icons/gi";
import { GiAirplaneArrival } from "react-icons/gi";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import CustomSelect from "../utils/CustomSelect";
export default function FormCard({panelType}) {

      const [value, setValue] = useState(0);
      const [tripType, setTripType] = useState('Round-Way');
      const [fromLocation, setFromLocation] = useState('');

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
         
      };
      const handleLChange = (e) => {
        setFromLocation(e.target.value);
      };
  return (
    <>
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
                    {panelType == 'HOTEL' ?
                    <>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}  gap={2} sx={{marginTop:'10px'}}>
                        
                        <Box sx={{width:'35%'}}>
                        <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                            DISTINATION
                        </Typography>
                        <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                            DHAKA
                        </Typography>
                        <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
                            <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><LocationPinIcon /></Box>
                            <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
                                <Select
                                value={fromLocation}
                                onChange={handleLChange}
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
                    
                        </Box>
                        <Box sx={{width:'35%'}}>
                            <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                                CHECK IN
                            </Typography>
                            <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                                24 April 2025
                            </Typography>
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
                        <Box sx={{width:'35%'}}>
                            <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                                CHECK OUT
                            </Typography>
                            <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                                24 April 2025
                            </Typography>
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
                    </Stack>
                    </>
                    :
                    <>
                        {panelType == 'TOUR' ?
                           <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}  gap={2} sx={{marginTop:'10px'}}>
                        
                           <Box sx={{width:'35%'}}>
                           <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                           DESTINATION TYPE
                           </Typography>
                           <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                           International
                           </Typography>
                           <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
                               <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><TravelExploreOutlinedIcon /></Box>
                               <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
                                   <Select
                                   value={fromLocation}
                                   onChange={handleLChange}
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
                       
                           </Box>
                           <Box sx={{width:'35%'}}>
                               <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                                WHERE?
                               </Typography>
                               <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                               Rome,Vasnis
                               </Typography>
                               <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
                               <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><LocationPinIcon /></Box>
                               <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
                                   <Select
                                   value={fromLocation}
                                   onChange={handleLChange}
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
                           </Box>
                           <Box sx={{width:'35%'}}>
                               <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                               WHEN?
                               </Typography>
                               <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                                   24 April 2025
                               </Typography>
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
                       </Stack>
                        :
                        <>
                            {panelType == 'VISA' ?
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}  gap={2} sx={{marginTop:'10px'}}>
                            <Box sx={{width:'45%'}}>
                           <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                           Destination city or country
                           </Typography>
                           <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                           USA
                           </Typography>
                           <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
                               <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><TravelExploreOutlinedIcon /></Box>
                               <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
                                   <Select
                                   value={fromLocation}
                                   onChange={handleLChange}
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
                       
                            </Box>
                            <Box sx={{width:'45%'}}>
                                <Typography variant="body2" sx={{textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'14px'}}>
                                Select visa type
                                </Typography>
                                <Typography variant="h3" sx={{fontWeight:'bold',textAlign:'left',fontFamily:'PTRootUIWebRegular',fontSize:'38px',color:'secondary.main',marginBlock:'8px'}}>
                                Tourist Visa
                                </Typography>
                                <Box sx={{ minWidth: '100%',position:'relative',display:'flex',alignItems:'center',gap:'0px'}}>
                                <Box sx={{bgcolor:'secondary.main',color:'white',height:'30px',width:'30px',padding:'2px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><LocationPinIcon /></Box>
                                <FormControl fullWidth sx={{ position: 'relative',height:'30px',zIndex:9999 }}>
                                    <Select
                                    value={fromLocation}
                                    onChange={handleLChange}
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
                            </Box>
                            </Stack>
                            :
                            <>
                            
                            </>
                            }
                        </>
                        }
                    </>
                    
                    }
                  
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
                         
                          {panelType == 'HOTEL' &&
                            <Box sx={{width:'100%',marginTop:'62px'}}>
                                <Button variant="contained" sx={{width:'100%',marginBlock:'16px',bgcolor:'secondary.main'}}>Search For Hotel</Button>
                            </Box>
                          }
                          {panelType == 'VISA' &&
                            <Box sx={{width:'100%',marginTop:'62px'}}>
                                <Button variant="contained" sx={{width:'100%',marginBlock:'16px',bgcolor:'secondary.main'}}>Search For Tour</Button>
                            </Box>
                          }
                          {panelType == 'TOUR' &&
                          <>
                            <Box sx={{width:'100%',marginTop:'8px'}}>
                                <Button variant="contained" sx={{width:'100%',bgcolor:'secondary.main'}}>Search For All Tour</Button>
                            </Box>
                            <Box sx={{width:'100%',marginTop:'8px'}}>
                                <Button variant="contained" sx={{width:'100%',bgcolor:'secondary.main'}}>Search For Tour</Button>
                            </Box>
                          </>
                          }
                        </Stack>
                      </Box>
        </Stack>
    </>
  )
}
