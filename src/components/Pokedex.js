import React from 'react';
import { Grid, Container } from '@mui/material';
import PokemonCard from './PokemonCard'; // Ajusta la ruta según tu estructura

const Pokedex = ({ pokemonList }) => {
  // Dividimos la lista en grupos de 3
  const groupedPokemon = [];
  for (let i = 0; i < pokemonList.length; i += 3) {
    groupedPokemon.push(pokemonList.slice(i, i + 3));
  }

  return (
    <Container sx={{ py: 4 }}>
      {groupedPokemon.map((group, groupIndex) => (
        <Grid 
          container 
          spacing={2} 
          minHeight={160} 
          key={groupIndex}
          sx={{ mb: 2 }} // Margen bottom entre filas
        >
          {group.map((pokemon, index) => (
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              size={index === 0 || index === 2 ? "grow" : undefined}
              key={pokemon.name}
            >
              <PokemonCard item={pokemon} />
            </Grid>
          ))}
          {/* Si el grupo tiene menos de 3, llenamos con grids vacíos */}
          {group.length < 3 && Array(3 - group.length).fill().map((_, i) => (
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              size="grow"
              key={`empty-${i}`}
            />
          ))}
        </Grid>
      ))}
    </Container>
  );
};

export default Pokedex;