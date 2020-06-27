import React, { useState, useEffect, Component } from 'react';

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

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

class BestPokemon extends Component {
  state = {
    pokemonNames: [],
    isLoading: true
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then(res => res.json())
      .then(data => {
        const names = [data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name, data.pokemon_entries[6].pokemon_species.name]
        setTimeout(() => {
          this.setState({
            pokemonNames: names,
            isLoading: false
          })
        }, 1000)
      });
  }

  render() {
    return (
    <div>
      {this.state.isLoading ? <span>Loading...</span> :
      <>
        <h3>Abilities</h3>
        <ul>
          {this.props.abilities.map((name, index) => {
            return (
              <li key={index}>{name}</li>
            )
          })}
        </ul>
      </>
      }
      
    </div>
    )
  }
}

export default BestPokemonSelector;