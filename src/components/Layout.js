import React from 'react';
import { Box, Container, Typography } from '@mui/material';

// a. Declara el componente Layout como una arrow function nombrada que recibe children
const Layout = ({ children }) => {
  return (
    // b. Inserta un Box que envuelve todo el contenido
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Asegura que el layout ocupe toda la altura de la pantalla
      }}
    >
      {/* c. Dentro del Box, coloca un Container con una clase "container" */}
      <Container
        component="main" // Usamos "main" para indicar que es el contenido principal
        sx={{
          flex: 1, // Hace que el contenido principal ocupe el espacio restante
          py: 4, // Padding vertical
        }}
      >
        {/* d. Incluye children dentro del Container */}
        {children}
      </Container>

      {/* e. Crea un pie de página (footer) */}
      <Box
        component="footer"
        sx={{
          backgroundColor: 'primary.main', // Color de fondo del footer
          color: 'white', // Color del texto
          py: 3, // Padding vertical
          textAlign: 'center', // Centra el texto
        }}
      >
        {/* Contenido del footer */}
        <Typography variant="body1">
          © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

// f. Exporta el componente Layout
export default Layout;