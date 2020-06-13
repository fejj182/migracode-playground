import React from 'react';
import Header from './components/Logo'
import CaughtPokemon from './components/CaughtPokemon'
import BestPokemon from './components/BestPokemon'

function App() {
  return <div>
    <Header />
    <BestPokemon />
    <CaughtPokemon />
  </div>;
}

export default App;
