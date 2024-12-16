import { Box, useTheme } from '@mui/material';
import Geographycom from '../components/geographycom';
import Titlepages from "../components/Titlepages";

const Geography = () => {
    const theme = useTheme()
    return (
        <Box sx={{border:`1px solid ${theme.palette.text.primary}`}}>
            <Titlepages title1={'Geography'} title2={'Simple Geography Chart'}/>
            <Geographycom/>
        </Box>
    );
}

export default Geography;
