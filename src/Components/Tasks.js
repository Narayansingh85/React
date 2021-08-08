import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete, toggle}) => {
    return (
        <div className="Tasks" >
            {tasks.map((task)=>(<Task key={task.id} task={task} onDelete={onDelete} toggle={toggle} />))}
        </div>
    );
};
export default Tasks