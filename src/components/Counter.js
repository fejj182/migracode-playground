import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
 
    const increment = () => {
        setCount(count + 1)
    };

    const reset = () => {
        setCount(0)
    };

    return (
        <div>
        Caught {count} Pokemons
        <button onClick={increment}>Caught one more:</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter