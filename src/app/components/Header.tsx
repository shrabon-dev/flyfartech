import { Box, Button, Grid, Container } from "@mui/material";
import Image from "next/image";
import logo from "../assets/images/logo.webp";

export default function Header() {
  return (
    <Box sx={{bgcolor:'primary.light', padding: 2}}>
        <nav>
            <Container maxWidth="lg" >
                <Grid container spacing={2} justifyContent={'space-between'}  alignItems="center">
                {/* Logo */}
                <Grid size={4}>
                    <Box sx={{ width: { xs: 100, sm: 150 } }}>
                    <Image
                        src={logo}
                        alt="logo"
                        style={{
                        width: "100%",
                        height: "auto",
                        }}
                    />
                    </Box>
                </Grid>

                {/* Buttons */}
                <Grid size={4}
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                >
                    <Button  variant="contained" sx={{fontFamily:'PTRootUIWebRegular',fontSize:'14px', borderRadius: '30px',backgroundColor: 'secondary.main','&:hover': {backgroundColor: 'secondary.dark',},}}>Travel Agency</Button>
                    <Button  sx={{fontFamily:'PTRootUIWebRegular',fontSize:'14px', borderRadius: '30px',backgroundColor: 'secondary.dark','&:hover': {backgroundColor: 'secondary.main',},}} variant="contained">Login / Signup</Button>
                </Grid>
                </Grid>
            </Container>
        </nav>
    </Box>
  );
}
