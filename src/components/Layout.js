import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
        <Navbar></Navbar>
      {/* Contenedor principal */}
      <Container className="container">
        {children}
      </Container>
      
      {/* Pie de página */}
      <Box className="footer" sx={{ textAlign: "center", padding: 2, marginTop: 4, backgroundColor: "#f0f0f0" }}>
        &copy; {new Date().getFullYear()} Todos los derechos reservados Yair Guerra
      </Box>
    </Box>
  );
};

export default Layout;