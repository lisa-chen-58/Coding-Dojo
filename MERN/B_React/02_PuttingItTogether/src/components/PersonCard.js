// example, name this file Example.js
import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ageUp, setAgeUp] = useState (props.initialAge);
    return(
        <div>
            <h2>{ props.firstName } { props.lastName }</h2>
            <p>Age:  { ageUp } </p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ (event) => setAgeUp(ageUp + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}  

// export allows it to be found and used in other components including App.js
export default PersonCard;