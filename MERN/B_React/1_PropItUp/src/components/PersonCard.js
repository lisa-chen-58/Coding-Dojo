// example, name this file Example.js
import React from 'react';

const PersonCard = (props) => { //MUST BE CALLED PROPS
    return(
        // groups together all of our html-like commands called jsx, requires 1 parent component
        <div>
            <h2>{ props.firstName } { props.lastName }</h2>
            <p>Age:  {props.age} </p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}  

// export allows it to be found and used in other components including App.js
export default PersonCard;