import { Box, Container, Grid, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import Image from "next/image";
import crft from "../assets/images/certificate/crft.png";
import crft2 from "../assets/images/certificate/crft2.png";
import crft3 from "../assets/images/certificate/crft3.png";
import crft4 from "../assets/images/certificate/crft4.png";
import crft5 from "../assets/images/certificate/crft5.png";
import payment from "../assets/images/paymentgetwayimg.webp";
import SendIcon from '@mui/icons-material/Send';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "secondary.main", paddingBlock: 5,borderTop: "2px solid",borderColor: "secondary.dark" }}>
      <footer>
        <Container maxWidth="lg">
          <Grid container justifyContent={'space-between'} >
            <Grid size={{xs:12,sm:6,md:4}}>
                <Typography variant="h3" sx={{ fontWeight: "bold",fontFamily: "PTRootUIWebRegular", fontSize: "1.2rem", color: "primary.contrastText" }}>
                  Need Help?
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "primary.contrastText",minWidth: "30px",minHeight:'30px',bgcolor: "secondary.dark",borderRadius: "8px",display:'flex',alignItems:'center',justifyContent:'center',marginRight:'10px' }}>
                      <LocationPinIcon  style={{fontSize:'20px'}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" sx={{ fontSize: '14px', color: "primary.contrastText" }}>
                          Ka 11/2A, Bashundhara R/A Road, Jagannathpur, Dhaka 1229
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ color: "primary.contrastText",minWidth: "30px",minHeight:'30px',bgcolor: "secondary.dark",borderRadius: "8px",display:'flex',alignItems:'center',justifyContent:'center',marginRight:'10px' }}>
                      <CallIcon style={{fontSize:'20px'}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" sx={{ fontSize: '14px', color: "primary.contrastText" }}>
                         +880 1755 572 099
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                  <ListItemIcon sx={{ color: "primary.contrastText",minWidth: "30px",minHeight:'30px',bgcolor: "secondary.dark",borderRadius: "8px",display:'flex',alignItems:'center',justifyContent:'center',marginRight:'10px' }}>
                      <EmailIcon  style={{fontSize:'20px'}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" sx={{ fontSize: '14px', color: "primary.contrastText" }}>
                          support@flyfarint.com
                        </Typography>
                      }
                    />
                  </ListItem>
            
                </List>
            </Grid>
            <Grid size={{xs:12,sm:6,md:2}}>
                <Typography variant="h3" sx={{ fontWeight: "bold",fontFamily: "PTRootUIWebRegular", fontSize: "1.2rem", color: "primary.contrastText" }}>
                 Discover
                </Typography>
                <List>
                  <Link  href="/about" passHref legacyBehavior>
                    <ListItem  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText'}}  component={"a"} >
                      <ListItemText primary={
                        <Typography  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText',}} >About Us</Typography>
                      }/>
                    </ListItem>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <ListItem  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText'}}  component={"a"} >
                      <ListItemText primary={
                        <Typography  sx={{fontSize:'14px',color:'primary.contrastText'}} >Contact Us</Typography>
                      }/>
                    </ListItem>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <ListItem  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText'}}  component={"a"} >
                      <ListItemText primary={
                        <Typography  sx={{fontSize:'14px',color:'primary.contrastText'}} >Payment Method</Typography>
                      }/>
                    </ListItem>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <ListItem  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText'}}  component={"a"} >
                      <ListItemText primary={
                        <Typography  sx={{fontSize:'14px',color:'primary.contrastText'}} >Terms & Condition</Typography>
                      }/>
                    </ListItem>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <ListItem  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText'}}  component={"a"} >
                      <ListItemText primary={
                        <Typography  sx={{fontSize:'14px',color:'primary.contrastText'}} >Privacy & Policy</Typography>
                      }/>
                    </ListItem>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <ListItem  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText'}}  component={"a"} >
                      <ListItemText primary={
                        <Typography  sx={{fontSize:'14px',color:'primary.contrastText'}} >Refund & Cancellation</Typography>
                      }/>
                    </ListItem>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <ListItem  sx={{fontSize:'14px',padding:'0',color:'primary.contrastText'}}  component={"a"} >
                      <ListItemText primary={
                        <Typography  sx={{fontSize:'14px',color:'primary.contrastText'}} >Policy</Typography>
                      }/>
                    </ListItem>
                  </Link>
                </List>
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}  >
                <Typography variant="h3" sx={{ fontWeight: "bold",fontFamily: "PTRootUIWebRegular", fontSize: "1.2rem", color: "primary.contrastText" }}>
                 Certificate
                </Typography>
                <Stack direction="row"  sx={{ flexWrap: 'wrap',gap:'10px',marginTop:'20px',paddingRight:'20px',justifyContent:'center',alignItems:'center' }}>
                  <Image style={{width:'100px',height:'45px'}} src={crft} alt="certificate_img"/>
                  <Image style={{width:'100px',height:'45px'}} src={crft2} alt="certificate_img"/>
                  <Image style={{width:'100px',height:'45px'}} src={crft3} alt="certificate_img"/>
                  <Image style={{width:'100px',height:'45px'}} src={crft4} alt="certificate_img"/>
                  <Image style={{width:'100px',height:'45px'}} src={crft5} alt="certificate_img"/>
                </Stack>
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}>
                <Typography variant="h3" sx={{ fontWeight: "bold",fontFamily: "PTRootUIWebRegular", fontSize: "1.2rem", color: "primary.contrastText" }}>
                 Get In Touch
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', color: "primary.contrastText",marginTop:'20px',fontFamily: "PTRootUIWebMedium" }}>
                  We are here to help you. If you have any
                Question or feedback we would love to hear from you
                </Typography>
                <TextField
  label="Email Address"
  id="outlined-start-adornment"
  sx={{
    marginTop: 5,
    width: '100%',
    fontFamily: "PTRootUIWebRegular",
    fontSize: '14px',
    backgroundColor: 'transparent',
    '& .MuiInputLabel-root': {
      color: 'white',  
      fontSize: '14px',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',  
    },
    '& .MuiInputBase-input::placeholder': {
      color: 'white',
      opacity: 1,
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '50px',
      fontSize: '14px',
      color: 'white',
      '& fieldset': {
        borderColor: 'white',
        fontSize: '14px',
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
        fontSize: '14px',
        color: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        fontSize: '14px',
        color: 'white',
      },
    },
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end" >
        <SendIcon sx={{color:'white',fontSize:'28px',cursor:'pointer'}} />
      </InputAdornment>
    ),
  }}
/>

            </Grid>
          </Grid>
        <Box sx={{width:{xs:'100%',md:'80%',lg:'80%'},height:{xs:'auto',sm:'100px'},display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px',marginInline:'auto'}}>
          <Image className="" style={{height:'100%',width:'100%'}} src={payment} alt="payment_img"/>
        </Box>
        <Typography sx={{fontSize:'14px',color:'primary.contrastText',textAlign:'center',marginTop:'20px',fontFamily: "PTRootUIWebRegular",borderTop:'1px solid #e0e0e0',paddingTop:'20px'}}>
        © Copyright 2025 by Fly Far Tech | B2C OTA Portal
        </Typography>
        </Container>
      </footer>
    </Box>
  )
}
