import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
    <AppBar position="static">

      <Toolbar>
        <Sidebar/>
        <Typography variant="h6">
          Mi Aplicación
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;