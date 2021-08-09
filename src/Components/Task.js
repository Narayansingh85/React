import react from 'react'
import {FaTimes} from 'react-icons/fa'


import React from 'react'

const Task = ({task, onDelete}) => {
    return (
        <div className='Reminder' >
            <h3 key={task.id}>{task.text}
            <FaTimes id='fa' onClick={()=>onDelete(task.id)}/></h3>
        </div>
    );
};
export default Task
