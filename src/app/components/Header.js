import { Box, Button, Grid, Container } from "@mui/material";
import Image from "next/image";
import logo from "../assets/images/logo.webp";
import Link from "next/link";

export default function Header() {
  return (
      <Box sx={{bgcolor:'primary.light', padding: 2}}>
          <nav>
              <Container maxWidth="lg" >
                  <Grid container spacing={2} justifyContent={'space-between'}  alignItems="center">
                  {/* Logo */}
                  <Grid  size={{xs:3,lg:4,}}>
                      <Box sx={{ width: { xs: 100, sm: 150 } }}>
                      <Link href={"/"}>
                      <Image
                          src={logo}
                          alt="logo"
                          style={{
                          width: "100%",
                          height: "auto",
                          }}
                      />
                      </Link>
                      </Box>
                  </Grid>

                  {/* Buttons */}
                  <Grid size={{xs:9,lg:4,}}
                      sx={{ display: "flex", justifyContent: "flex-end", gap:{xs:1,sm:2} }}
                  >
                      <Button  variant="contained" sx={{fontFamily:'PTRootUIWebRegular',fontSize:{xs:'8px',sm:'14px'}, borderRadius: '30px',backgroundColor: 'secondary.main','&:hover': {backgroundColor: 'secondary.dark',},padding:{xs:'0px 8px',sm:'8px 16px'}}}>Travel Agency</Button>
                      <Button  sx={{fontFamily:'PTRootUIWebRegular',fontSize:{xs:'8px',sm:'14px'}, borderRadius: '30px',backgroundColor: 'secondary.dark','&:hover': {backgroundColor: 'secondary.main',},}} variant="contained">Login / Signup</Button>
                  </Grid>
                  </Grid>
              </Container>
          </nav>
      </Box>
  );
}
