import React from 'react';
import Logo from './components/Logo'
import CaughtPokemon from './components/CaughtPokemon'
import BestPokemonSelector from './components/BestPokemonSelector'
import './App.css';

function App() {
  const today = new Date().toLocaleDateString()
  return <div>
    <Logo appName="Jeff's Pokedex"/>
    <BestPokemonSelector/>
    <CaughtPokemon date={today}/>
  </div>;
}

export default App;
