import React from 'react';
import Layout from 'Layout';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <Layout>
      {/* Este contenido se pasa como children a Layout */}
      <Typography variant="h4" gutterBottom>
        ¡Bienvenido a Mi Aplicación!
      </Typography>
      <Typography variant="body1">
        Este es el contenido principal de la aplicación.
      </Typography>
    </Layout>
  );
};

export default App;