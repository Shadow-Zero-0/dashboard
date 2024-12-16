import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Row1 from "../components/Row1";
import Row2 from "../components/Row2";
import Row3 from "../components/Row3";
import Titlepages from "../components/Titlepages";

const Home = () => {

  return (
    <Box>
   <Titlepages title1={'Dashboard'} title2={'Welcome to your Dashboard'}/>
      <Box
        sx={{
          textAlign: "right",
          mb:"15px"
        }}
      >
        <Button
          sx={{
            padding: "6px 8px",
            textTransform: "capitalize",
          }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1/>
      <Row2/>
      <Row3/>
    </Box>
  );
};

export default Home;
