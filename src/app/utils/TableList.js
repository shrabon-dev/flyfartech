'use client';
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
export default function TableList() {
  return (
    <>
             <TableContainer component={Paper} sx={{borderRadius:'0px'}}>
                      <Table sx={{borderRadius:'0px',width:{xs:'600px',sm:'100%',md:'100%',lg:'100%'}}}>
                        <TableHead  sx={{bgcolor:'secondary.dark',fontFamily:'PTRootUIWebMedium',fontSize:'14px',}}>
                          <TableRow>
                            <TableCell sx={{color:'primary.light',fontFamily:'PTRootUIWebLight',fontSize:'14px',padding:'4px 10px'}}><strong>Tax Type</strong></TableCell>
                            <TableCell sx={{color:'primary.light',fontFamily:'PTRootUIWebLight',fontSize:'14px',padding:'4px 10px'}}><strong>Base Fare (BDT)</strong></TableCell>
                            <TableCell sx={{color:'primary.light',fontFamily:'PTRootUIWebLight',fontSize:'14px',padding:'4px 10px'}}><strong>Tax Fees (BDT)</strong></TableCell>
                            <TableCell sx={{color:'primary.light',fontFamily:'PTRootUIWebLight',fontSize:'14px',padding:'4px 10px'}}><strong>Per Passenger</strong></TableCell>
                            <TableCell sx={{color:'primary.light',fontFamily:'PTRootUIWebLight',fontSize:'14px',padding:'4px 10px'}}><strong>Total Cost (BDT)</strong></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}>Adult</TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}>10,048 ৳</TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}>2,350 ৳</TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}>(10,0482350 x 1) ৳</TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}>12,398 ৳</TableCell>
                          </TableRow>
                        </TableBody>
                        <TableFooter>
                          <TableRow>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}>
                              <Typography sx={{color:'secondary.main',fontFamily:'PTRootUIWebMedium',fontSize:'14px',}}>
                              Total
                              </Typography>
                              <Typography sx={{color:'secondary.main',fontFamily:'PTRootUIWebMedium',fontSize:'14px',}}>
                              Discount
                              </Typography>
                              <Typography sx={{color:'secondary.main',fontFamily:'PTRootUIWebMedium',fontSize:'14px',}}>
                              Grand Total
                              </Typography>
                            </TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}></TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}></TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',padding:'4px 10px'}}> </TableCell>
                            <TableCell sx={{color:'secondary.dark',fontFamily:'PTRootUIWebRegular',fontSize:'14px',textAlign:'right',padding:'4px 10px'}}>
                            <Typography sx={{color:'secondary.main',textAlign:'right',fontFamily:'PTRootUIWebMedium',fontSize:'14px',}}>
                            12398 ৳
                              </Typography>
                              <Typography sx={{color:'secondary.main',textAlign:'right',fontFamily:'PTRootUIWebMedium',fontSize:'14px',}}>
                              1398 ৳
                              </Typography>
                              <Typography sx={{color:'secondary.main',textAlign:'right',fontFamily:'PTRootUIWebMedium',fontSize:'14px',}}>
                              2398 ৳
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableFooter>
                      </Table>
                    </TableContainer>
    </>
  )
}
