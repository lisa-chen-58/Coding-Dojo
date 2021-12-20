import React, { useState } from 'react';

const Form = (props) => {
    const{toDo, setToDo} = props;
    const[task,setTask]=useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setToDo([...toDo,{ 
            title : task, 
            id: Math.floor(Math.random()*1000).toString(),
            markComplete: false
        }])
        setTask("");
    };
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>To Do List:</h1>
                <label />
                <input
                    rows="1"
                    cols="30"
                    onChange={ (e) => setTask(e.target.value) }
                    value= {task}
                    name="toDo"
                ></input>
                <button type="submit">Add Me</button>
            </form>
        </div>
    );
};
export default Form;