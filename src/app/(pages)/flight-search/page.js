import DetailsofFlight from "../../components/DetailsofFlight";
import FlightItem from "../../components/FlightItem";
import { Box, Container, Grid } from "@mui/material";

export default function FlightSearch() {
  return (
    <>
      <Box className="flight-search" sx={{ paddingBlock: "60px", backgroundColor: "primary.light" }}>
        <Container maxWidth="lg">
          <Grid direction={'row'} container spacing={2}>
            <Grid size={3} sx={{
              display: { xs: 'none', lg: 'block' },}}>
              <Box className="filter_bar" sx={{bgcolor:'white', color:'secondary.dark',width:'100%',height:'100vh',boxShadow:'0 0 50px #10101010',border:'1px solid #cccccc', padding:'10px 20px', borderRadius:'5px'}}>
                <h2>Filter</h2>
              </Box>
            </Grid>
            <Grid size={
              {
                lg: 9,
                md: 12,
              }
            }>
              <Box className="search__header" sx={{bgcolor:'secondary.main', color:'white', padding:'40px 20px', borderRadius:'5px'}}>

              </Box>
              <Box className="item_list">
                <FlightItem type={'round-way'}/>              
                <FlightItem type={'round-way'}/>              
                <FlightItem type={'round-way'}/>              
                <FlightItem type={'round-way'}/>              
                <FlightItem type={'round-way'}/>              
              </Box>
            </Grid>
          </Grid>
        
          
        </Container>
      </Box>
      <DetailsofFlight type={'round-way'}/>
    </>
  )
}
