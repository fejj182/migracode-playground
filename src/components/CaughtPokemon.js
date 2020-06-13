import React from 'react';

function CaughtPokemon() {
    const date = new Date().toLocaleDateString()
    return <div>
    <p>Caught 0 Pokemon on </p>{date}
    </div>
}

export default CaughtPokemon;