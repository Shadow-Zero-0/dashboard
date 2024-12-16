import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
    const theme = useTheme()
  return (
    <Stack
      direction={"row"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
      flexWrap={"wrap"}
    >
      <Card
              incrass={+14}
              icon={<EmailIcon sx={{ fontSize: '25px', color: theme.palette.secondary.main }} />}
              subtitle={"Email Send"}
              title={12.361} data={data1} scheme={'nivo'}      />
      <Card  
              incrass={+21}
              icon={<PointOfSaleIcon sx={{ fontSize: '25px', color: theme.palette.secondary.main }} />}
              subtitle={"Sales obtained"}
              title={'431,225'} data={data2} scheme={'category10'}/>
          <Card  
              incrass={+5}
              icon={<PersonAddIcon sx={{ fontSize: '25px', color: theme.palette.secondary.main }} />}
              subtitle={"New Clients"}
              title={"1,325,134"} data={data3} scheme={'accent'}/>
          <Card  
              incrass={+43}
              icon={<TrafficIcon sx={{ fontSize: '25px', color: theme.palette.secondary.main }} />}
              subtitle={"Traffic Received"}
              title={800.52} data={data4} scheme={'dark2'}/>
    </Stack>
  );
};

export default Row1;
