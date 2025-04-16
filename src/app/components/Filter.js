import { Box, Button, Checkbox, FormControlLabel, FormGroup, Slider, Typography } from "@mui/material";
import { useState } from "react";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
export default function Filter() {
    const MAX = 100000;
    const MIN = 1000;
    const marks = [
      {
        value: MIN,
        label: '',
      },
      {
        value: MAX,
        label: '',
      },
    ];
  
    const [val, setVal] = useState(MIN);
  
    const handleChange = (_, newValue) => {
        setVal(newValue);
      };
  return (
    <>
        <Box className="filter_bar" sx={{bgcolor:'white', color:'secondary.dark',width:'100%',height:'fit-content',boxShadow:'0 0 50px #10101010',border:'1px solid #cccccc', padding:'10px 20px', borderRadius:'5px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography sx={{fontSize:'14px',fontFamily:'PTRootUIWebMedium',color:'secondary.dark',textTransform:'uppercase'}}>Filter</Typography>
                  <Button variant="text" sx={{fontSize:'14px',fontFamily:'PTRootUIWebMedium',color:'secondary.dark',textTransform:'uppercase'}}>RESET</Button>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'10px'}}>
                  <Button sx={{bgcolor:'secondary.main',transitionDuration:'.4s','&:hover':{bgcolor:'secondary.dark'}}} variant={'contained'}>Cheapest</Button>
                  <Button sx={{bgcolor:'secondary.dark',transitionDuration:'.4s','&:hover':{bgcolor:'secondary.main'}}} variant={'contained'}>Fastest</Button>
                </Box>
                <Box sx={{ width: '100%',paddingTop:'20px'}}>
                  <Typography sx={{fontSize:'16px',paddingBottom:'20px',fontFamily:'PTRootUIWebMedium',color:'secondary.main'}}>Price Range</Typography>
                    <Slider
                      marks={marks}
                      step={10}
                      value={val}
                      sx={{'& .MuiSlider-thumb': {
                        backgroundColor: '#fff', 
                        border: '4px solid',
                        borderColor:'secondary.main',
                      },
                      '& .MuiSlider-track': {
                        backgroundColor: 'secondary.main',
                        height:'14px',
                        borderColor:'secondary.main',
                      },
                      '& .MuiSlider-rail': {
                        height:'14px',
                        backgroundColor: 'secondary.main', 
                      },}}
                      valueLabelDisplay="auto"
                      min={MIN}
                      max={MAX}
                      onChange={handleChange}
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography
                        variant="body2"
                        onClick={() => setVal(MIN)}
                        sx={{ cursor: 'pointer' }}
                      >
                        {MIN} ৳
                      </Typography>
                      <Typography
                        variant="body2"
                        onClick={() => setVal(MAX)}
                        sx={{ cursor: 'pointer' }}
                      >
                        {MAX} ৳
                      </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', paddingTop: '14px' }}>
                <Typography sx={{ fontSize: '16px',paddingBottom:'14px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.main' }}>
                  Price Type  <ArrowDropUpIcon sx={{fontSize:'20px',color:'secondary.dark',position:'relative',top:'4px'}}/>
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px',color:'secondary.main', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px' }}>
                        Refundable
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    
                    control={<Checkbox size="small"  sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', color:'secondary.main',fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px'  }}>
                        Non-Refundable
                      </Typography>
                    }
                  />
                </FormGroup>
                </Box>
                <Box sx={{ width: '100%', paddingTop: '14px' }}>
                <Typography sx={{ fontSize: '16px',paddingBottom:'20px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.main' }}>
                  Stops  <ArrowDropUpIcon sx={{fontSize:'20px',color:'secondary.dark',position:'relative',top:'4px'}}/>
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px',color:'secondary.main', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px' }}>
                       Non Stop
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', color:'secondary.main',fontFamily: 'PTRootUIWebMedium',paddingleft:'10px',margin:'0px' }}>
                        One Stop
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    
                    control={<Checkbox size="small"  sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', color:'secondary.main', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px'  }}>
                        One Plus Stop
                      </Typography>
                    }
                  />
                </FormGroup>
                </Box>
                <Box sx={{ width: '100%', paddingTop: '14px' }}>
                  <Typography sx={{ fontSize: '16px',paddingBottom:'20px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.main' }}>
                    Departure Times  <ArrowDropUpIcon sx={{fontSize:'20px',color:'secondary.dark',position:'relative',top:'4px'}}/>
                  </Typography>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px',marginBottom:'10px' }}>
                    <WbTwilightIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 00:00 - 05:59
                  </Button>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px',marginBottom:'10px' }}>
                    <SunnyIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 06:00 - 11:59
                  </Button>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px',marginBottom:'10px' }}>
                    <WbTwilightIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 12:00 - 17:59
                  </Button>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px',    }}>
                    <BedtimeIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 00:00 - 05:59
                  </Button>
     
                </Box>
                <Box sx={{ width: '100%', paddingTop: '20px' }}>
                  <Typography sx={{ fontSize: '16px',paddingBottom:'20px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.main' }}>
                    Arrival Times  <ArrowDropUpIcon sx={{fontSize:'20px',color:'secondary.dark',position:'relative',top:'4px'}}/>
                  </Typography>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px',marginBottom:'10px' }}>
                    <WbTwilightIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 00:00 - 05:59
                  </Button>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px',marginBottom:'10px' }}>
                    <SunnyIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 06:00 - 11:59
                  </Button>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px',marginBottom:'10px' }}>
                    <WbTwilightIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 12:00 - 17:59
                  </Button>
                  <Button variant="text" sx={{display:'flex',alignItems:'center',fontSize: '12px',fontFamily: 'PTRootUIWebMedium', color: 'secondary.main',bgcolor:'secondary.light',width:'100%',justifyContent:'start',gap:'10px' }}>
                    <BedtimeIcon sx={{color:'secondary.dark',fontSize: '20px'}}/> 00:00 - 05:59
                  </Button>
     
                </Box>
                <Box sx={{ width: '100%', paddingTop: '20px' }}>
                <Typography sx={{ fontSize: '16px',paddingBottom:'20px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.main' }}>
                  Layover Airport  <ArrowDropUpIcon sx={{fontSize:'20px',color:'secondary.dark',position:'relative',top:'4px'}}/>
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px',color:'secondary.main', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px' }}>
                      Hazrat Shahjalal Intl Airport
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', color:'secondary.main',fontFamily: 'PTRootUIWebMedium',paddingleft:'10px',margin:'0px' }}>
                        COXs Bazar Airport
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    
                    control={<Checkbox size="small"  sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', color:'secondary.main', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px'  }}>
                        Saidpur Airport
                      </Typography>
                    }
                  />
                </FormGroup>
                </Box>
                <Box sx={{ width: '100%', paddingTop: '20px' }}>
                <Typography sx={{ fontSize: '16px',paddingBottom:'20px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.main' }}>
                  Baggeg   <ArrowDropUpIcon sx={{fontSize:'20px',color:'secondary.dark',position:'relative',top:'4px'}}/>
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px',color:'secondary.main', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px' }}>
                     20 kg
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px',color:'secondary.main','&.Mui-checked': {
                        color: 'secondary.main',
                      },}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', color:'secondary.main',fontFamily: 'PTRootUIWebMedium',paddingleft:'10px',margin:'0px' }}>
                       NaN Piece
                      </Typography>
                    }
                  />
            
                </FormGroup>
                </Box>
           

              </Box>
    </>
  )
}
