import { Box, Checkbox, FormControlLabel, FormGroup, Slider, Typography } from "@mui/material";
import { useState } from "react";

export default function Filter() {
    const MAX = 100;
    const MIN = 0;
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
        <Box className="filter_bar" sx={{bgcolor:'white', color:'secondary.dark',width:'100%',height:'100vh',boxShadow:'0 0 50px #10101010',border:'1px solid #cccccc', padding:'10px 20px', borderRadius:'5px'}}>
                <Typography sx={{fontSize:'14px',fontFamily:'PTRootUIWebMedium',color:'secondary.dark',textTransform:'uppercase'}}>Filter</Typography>
                <Box sx={{ width: '100%',paddingTop:'14px'}}>
                  <Typography sx={{fontSize:'14px',fontFamily:'PTRootUIWebMedium',color:'secondary.dark'}}>Price Range</Typography>
                    <Slider
                      marks={marks}
                      step={10}
                      value={val}
                      sx={{width:'80%',marginLeft:'20px'}}
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
                        {MIN} min
                      </Typography>
                      <Typography
                        variant="body2"
                        onClick={() => setVal(MAX)}
                        sx={{ cursor: 'pointer' }}
                      >
                        {MAX} max
                      </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', paddingTop: '20px' }}>
                <Typography sx={{ fontSize: '14px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.dark' }}>
                  Price Type
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px'}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px' }}>
                        Refundable
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    
                    control={<Checkbox size="small"  sx={{padding:'6px'}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px'  }}>
                        Non-Refundable
                      </Typography>
                    }
                  />
                </FormGroup>
                </Box>
                <Box sx={{ width: '100%', paddingTop: '20px' }}>
                <Typography sx={{ fontSize: '14px', fontFamily: 'PTRootUIWebMedium', color: 'secondary.dark' }}>
                  Stops
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px'}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px' }}>
                       Non Stop
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" sx={{padding:'6px'}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', fontFamily: 'PTRootUIWebMedium',paddingleft:'10px',margin:'0px' }}>
                        One Stop
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    
                    control={<Checkbox size="small"  sx={{padding:'6px'}} />}
                    label={
                      <Typography sx={{ fontSize: '14px', fontFamily: 'PTRootUIWebMedium',padding:'0px',margin:'0px'  }}>
                        One Plus Stop
                      </Typography>
                    }
                  />
                </FormGroup>
                </Box>

              </Box>
    </>
  )
}
