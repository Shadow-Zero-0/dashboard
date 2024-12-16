
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme  } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, Tooltip, Typography } from '@mui/material';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router";
const Drawer1 = ({open,handleDrawerClose}) => {
  const theme = useTheme();
  let location = useLocation();
  const drawerWidth = 240;
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
          {
            props: ({ open }) => open,
            style: {
              ...openedMixin(theme),
              '& .MuiDrawer-paper': openedMixin(theme),
            },
          },
          {
            props: ({ open }) => !open,
            style: {
              ...closedMixin(theme),
              '& .MuiDrawer-paper': closedMixin(theme),
            },
          },
        ],
      }),
    );
    const closedMixin = (theme) => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
    });
      
    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));

    const openedMixin = (theme) => ({
 
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
 
      overflowX: 'hidden',
    });
    const Array1 = [
      { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
      { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
      {
        text: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        path: "/contacts",
      },
      {
        text: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
        path: "/invoices",
      },
    ];
    
    const Array2 = [
      { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
      { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
      {
        text: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
        path: "/faq",
      },
    ];
    
    const Array3 = [
      { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
      { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
      { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
      { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
    ];
    let navigate = useNavigate();

    return (
        <Drawer  variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Avatar 
  alt="Remy Sharp"
  src="https://media.gemini.media/img/shift-eg/large/2022/3/28/2022_3_28_14_18_53_823.webp"
  sx={{
     width: open?88:50,
      height:open?88:50 , 
    mx:'auto',
    my:1,
   
  
  }}
/>
{open && (
<>
    <Typography 
     textAlign={'center'} variant="body1" >OmarAhmed</Typography>
    <Typography textAlign={'center'} variant="body1" color="secondary">Admin</Typography>
</>
)}

        <Divider />
    
    
        <List>
          {Array1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => {
                navigate(item.path)
              }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    // @ts-ignore
                    bgcolor:location.pathname=== item.path ? theme.palette.mycolor.main:null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <Tooltip title={item.text} placement="right">
                  {item.icon}
                  </Tooltip>
             
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => {
                navigate(item.path)
              }}
                sx={[
                  {
                    // @ts-ignore
                    bgcolor:location.pathname=== item.path ? theme.palette.mycolor.main:null,
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                <Tooltip title={item.text} placement="right">
                  {item.icon}
                  </Tooltip>
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => {
                navigate(item.path)
              }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    // @ts-ignore
                    bgcolor:location.pathname=== item.path ? theme.palette.mycolor.main:null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
              <Tooltip title={item.text} placement="right">
                  {item.icon}
                  </Tooltip>
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
    );
}

export default Drawer1;
