import React from 'react';
import Logo from './components/Logo'
import CaughtPokemon from './components/CaughtPokemon'
import BestPokemonFetcher from './components/BestPokemonFetcher'
import './App.css';

function App() {
  const today = new Date().toLocaleDateString()
  return <div>
    <Logo appName="Jeff's Pokedex"/>
    <BestPokemonFetcher abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date={today}/>
  </div>;
}

export default App;
