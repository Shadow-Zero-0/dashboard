import {  Paper, Stack, Typography, useTheme } from "@mui/material";


import Piecom from "./piecom";
import Barchart from "./Barchart";
import Geographycom from "./geographycom";

const Row3 = () => {
  const theme = useTheme();
 

  return (
    <Stack direction={'row'} flexWrap={'wrap'} gap={1} mt={2}>
      <Paper sx={{minWidth: "28%", flexGrow:1}}>
      <Typography variant="h6" sx={{
                                mb:1,
                                mt:3,
                                ml:4,
                                
                            }} fontWeight={'bold'} color={theme.palette.secondary.main}>Revenue Generated</Typography>
           <Piecom isdash={true}/>
             <Typography sx={{
                textAlign:'center',
                fontSize:'13px',
                mt:2
             }} variant="body1" >$48.352 revenue generated</Typography>
             <Typography sx={{
                textAlign:'center',
                mt:2
             }} variant="body1" >Includes extra misc expenitures and costs</Typography>

      </Paper>
      <Paper sx={{minWidth:'400px', width: "33%",  flexGrow:1}}>
      <Typography variant="h6" sx={{
                                mb:1,
                                mt:3,
                                ml:4,
                                
                            }} fontWeight={'bold'} color={theme.palette.secondary.main}>Sales Quantity</Typography>
      <Barchart isdash={true}/>
      </Paper>
      <Paper sx={{minWidth:'400px', width: "33%",  flexGrow:1}}>
      <Geographycom isdash={true}/>
      <Typography variant="h6" sx={{
                                mb:1,
                                mt:3,
                                ml:4,
                                
                            }} fontWeight={'bold'} color={theme.palette.secondary.main}>Geography</Typography>
        </Paper>
    </Stack>
  );
};

export default Row3;
