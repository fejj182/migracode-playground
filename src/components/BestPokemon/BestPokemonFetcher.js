import React, { useState, useEffect } from 'react';
import BestPokemon from './BestPokemon'

function BestPokemonFetcher(props) {
    let [bestPokemon, setBestPokemon] = useState(null);
  
    useEffect(() => {
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`
      )
        .then(res => res.json())
        .then(data => setBestPokemon(data));
    }, [props.pokemonId]);
  
    if (!bestPokemon) {
      return null
    } else {
      const abilities = bestPokemon.abilities.map(item => {
        return item.ability.name
      })
      return <BestPokemon 
        abilities={abilities}
      />
    }
  }

  export default BestPokemonFetcher