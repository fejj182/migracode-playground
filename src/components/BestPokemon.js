import React from 'react';

function BestPokemon() {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
    
    return <div>
    <ul>
    {abilities.map((name, index) => {
      return (
        <li key={index}>{name}</li>
      )
    })}
  </ul>
    </div>
}

export default BestPokemon;