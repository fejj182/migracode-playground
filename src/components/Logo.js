import React from 'react';

function Logo(props) {
    return <div id="logo">
    <header>
      <h1>{props.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon"></img>
    </header>
  </div>;
}

export default Logo;