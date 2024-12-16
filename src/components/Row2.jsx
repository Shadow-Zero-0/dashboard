import { Box, Paper, Stack, Typography, useTheme, IconButton } from '@mui/material';

import Linecom from './Linecom';
import { DownloadOutlined } from '@mui/icons-material';
import { Transactions } from './data';

const Row2 = () => {
    const Theme = useTheme()
    return (
        <Stack direction={'row'}gap={2} flexWrap={'wrap'} mt={3}>
            <Paper sx={{
   
                maxWidth:999,
                flexGrow:1,
                // minWidth:"400px"
      
                }}  >
                    <Stack direction={'row'}alignItems={'center'} >
                        <Box >
                            <Typography variant="h6" sx={{
                                mb:1,
                                mt:3,
                                ml:4,
                                
                            }} fontWeight={'bold'} color={Theme.palette.secondary.main}>Revenue Generated</Typography>
                            <Typography ml={4} variant="body1" >$59,254.25</Typography>

                        </Box>
                        <Box sx={{
                            flexGrow:1,
                        }}></Box>
                        <Box mr={4}>
                           <IconButton aria-label="" >
                           <DownloadOutlined />
                           </IconButton>
                        </Box>
                    </Stack>
            <Linecom isdash={true}/>
            
            </Paper>
            <Box sx={{
             
                minWidth:'280px',
            overflow:'auto',
                 maxHeight:380,
                  flexGrow:1,
             
                  }}>
            <Paper >
            <Typography variant="h6"p={1.2} fontWeight={'bold'} color={Theme.palette.secondary.main}>Recent Transactions</Typography>
           
          
         
            </Paper>
            <Box sx={{
           
            
        }}>
{Transactions.map((item) => {
             return(
                 <Paper
                 key={item.txId}
           sx={{
             mt: 1,
             display: "flex",
             justifyContent: "space-between",
             alignItems: "center",
           }}
         >
           <Box p={1.2}>
             <Typography variant="body1">{item.txId}</Typography>
             <Typography variant="body2">{item.user}</Typography>
           </Box>
           <Typography variant="body1">{item.date}</Typography>

           <Typography
             borderRadius={1.4}
             p={1}
             bgcolor={Theme.palette.error.main}
             color={Theme.palette.getContrastText(Theme.palette.error.main)}
             variant="body2"
           >
             ${item.cost}
           </Typography>
         </Paper>
             )
         })}
        </Box>
            </Box>
        </Stack>
    );
}

export default Row2;
