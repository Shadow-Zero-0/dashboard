import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../data/datateam";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Titlepages from "../components/Titlepages";
const Team = () => {
 const theme =useTheme()
  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 33,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 33,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 33,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 33,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 33,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      width: 33,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box    sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'space-evenly',
            p: "5px",
             width: "99px",
            borderRadius:"5px",
          backgroundColor: access=== 'Admin'  ? theme.palette.primary.dark :access=== 'Manager'?theme.palette.secondary.dark:"#3da58a",
          }}>
            
           {
            access=== 'Admin'  ? (<AdminPanelSettingsOutlined  sx={{
              color:'#fff',
              fontSize:'17px'
             }}/>) :access=== 'Manager'?(<SecurityOutlined  sx={{
              color:'#fff',
              fontSize:'17px'
             }}/>):(<LockOpenOutlined  sx={{
              color:'#fff',
              fontSize:'17px'
             }}/>)
           }
            <Typography
           
              variant="body1"
           sx={{
            color:'#fff',
            fontSize:'13px'
           }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ height: 600, width: "98%" }}>
<Titlepages title1={"TEAM"} title2={"Managing the Team Members"}/>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
};

export default Team;
