import { Box } from "@mui/material";
import Linecom from "../components/Linecom";
import Titlepages from "../components/Titlepages";

const Line = () => {
    return (
        <Box sx={{
            height:"75vh"
        }}>
            <Titlepages title1={'Line Chart'} title2={'Simple Line Chart'}/>
          <Linecom/>
        </Box>
    );
}

export default Line;
