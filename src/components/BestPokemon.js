import React from 'react';

function BestPokemon(props) {
    return <div>
    <ul>
    {props.abilities.map((name, index) => {
      return (
        <li key={index}>{name}</li>
      )
    })}
  </ul>
    </div>
}

export default BestPokemon;