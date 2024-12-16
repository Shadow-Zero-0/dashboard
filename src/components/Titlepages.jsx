import { Box, Button, Typography, useTheme } from "@mui/material";

const Titlepages = ({title1,title2}) => {
    const theme =useTheme()
    return (
        <Box mb={2}>
        <Typography variant="h5"color={theme.palette.info.light} fontWeight={'bold'}>{title1}</Typography>
        <Typography variant="body1" >{title2}</Typography>
      </Box>
    );
}

export default Titlepages;
