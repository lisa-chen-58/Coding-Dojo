import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Display = (props) => {
    const [State, setState] = useState([]);

    useEffect(() => {
        console.log("How do you get pikachu on a bus? You pok-em-on!")
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=870/')
            .then((response) => {
                console.log(response.data.results);
                setState(response.data.results);
            })
            .catch((err) => console.log(err));
        }, []); //empty array is the second parameter of useEffect - makes it so that this doesn't run more than once

        return (
            <div className="App">
                <h1>Axios Pokemon API Assignment</h1>
                <ul>
                    {State.map((pokemon, index) => (
                        <li key={index}>
                            {pokemon.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
        }
export default Display;