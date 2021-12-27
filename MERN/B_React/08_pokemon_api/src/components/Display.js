import React, {useState, useEffect} from 'react';

const Display = (props) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log("How do you get pikachu on a bus? You pok-em-on!")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=870/')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({
                    pokemon: response.results
                })
            })
    }, []);

    return(
        <div>
            {state.pokemon ? state.pokemon.map((item, index) => {
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    );
}
export default Display;