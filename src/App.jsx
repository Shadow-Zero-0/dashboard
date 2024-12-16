import { Outlet } from "react-router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Appber from "./components/Appber";
import Drawer1 from "./components/Drawer1";
import {  getDesignTokens } from "./theme";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useMemo } from "react";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setmode] = useState(localStorage.getItem('mode') ?localStorage.getItem('mode'):'light');

  const theme =useMemo(() => 
    createTheme(getDesignTokens(mode))
  ) 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appber open={open} handleDrawerOpen={handleDrawerOpen} setmode={setmode}/>
        <Drawer1 open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 ,width:'100%'}}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
