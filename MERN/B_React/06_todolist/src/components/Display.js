import React, { useState  } from 'react';

const Display = (props) => {
    const{toDo, setToDo} = props;
    const remove = (id) => {
        setToDo(toDo.filter((key) => key.id !== id))
    }

    const handMarked = (task) => {
        task.markComplete = !task.markComplete;
        setToDo([...toDo])
    }

    // const handleMarked = (index) => {
    //     const updated = toDo.filter((task, i) => {
    //         if( index === i ){
    //             task.markComplete = !task.markComplete
    //         }
    //         return task
    //     }) 
    //     setToDo(updated)
    // }

    const styled = (markComplete) => {
        // {markComplete ? "completed" : "notCompleted"}
        if (markComplete === true){
            return "completed"
        }
        else {
            return "notCompleted"
        }
    }
    return(
        <div>
            {
                toDo.map( (task,index) => 
                <div key={index}>
                    <p className={styled(task.markComplete)}>{task.title}</p>
                    <input type="checkbox" value={task.markComplete} onChange={ () => handleMarked(task)} />
                    <button onClick={() => remove(task.id)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}

export default Display;