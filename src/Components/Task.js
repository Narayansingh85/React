import react from 'react'
import {FaTimes} from 'react-icons/fa'


import React from 'react'

const Task = ({task, onDelete, toggle}) => {
    return (
        <div className='Reminder' onDoubleClick={()=>toggle(task.id)}>
            <h3 key={task.id}>{task.text}
            <FaTimes id='fa' onClick={()=>onDelete(task.id)}/></h3>
        </div>
    );
};
export default Task
