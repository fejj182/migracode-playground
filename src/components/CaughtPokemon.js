import React, { Component } from 'react';

class CaughtPokemon extends Component {
    state = {
        caughtPokemon: 0
    }

    catch = () => {
        this.setState(prevState => {
            return {
                caughtPokemon: prevState.caughtPokemon + 1
            }
        })
    }

    reset = () => {
        this.setState(() => {
            return {
                caughtPokemon: 0
            }
        })
    }
    
    render() {
        return (
        <div>
            <p>Caught {this.state.caughtPokemon} Pokemon on </p>{this.props.date}
            <button onClick={this.catch}>Catch</button>

            {this.state.caughtPokemon > 0 
            ? <ResetButton reset={this.reset}/> 
            : null
            }
            
        </div>
        )
    }
}

const ResetButton = (props) => {
    return (
        <button onClick={props.reset}>Reset</button>
    )
}

export default CaughtPokemon;