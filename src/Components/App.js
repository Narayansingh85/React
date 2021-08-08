import './App.css'; 
import storedData from "./data.json"
import React, { useState } from 'react';
import Tasks from './Tasks';
import { Header } from './Header';
import AddTask from './AddTask';

const App = () => {
  const [toggle,setToggle] = useState(false);
  const [tasks, setTasks] = useState(storedData.data);
  // Toggeling the form
  // const 
  // Func to delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Func to Set reminder
  const reminder=(id)=>{
    console.log(id)
  }
  //Func to Add Tasks
  const addTask = (task)=>{
    const id= Math.floor(Math.random()*1000)+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }
  return (
    <div className="App">
      <Header onAdd={()=>setToggle(!toggle)} toggle={toggle} />
      {toggle&&<AddTask onAdd={addTask}  />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggle={reminder} /> : 'No tasks to Show'}
    </div>
  );
};



export default App;


// export default App;
