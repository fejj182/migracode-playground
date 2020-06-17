import React from 'react';
import Logo from './components/Logo'
import CaughtPokemon from './components/CaughtPokemon'
import BestPokemon from './components/BestPokemon'
import './App.css';

function App() {
  const today = new Date().toLocaleDateString()
  return <div>
    <Logo appName="Jeff's Pokedex"/>
    <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date={today}/>
  </div>;
}

export default App;
