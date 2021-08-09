import './App.css'; 
import React, { useState, useEffect } from 'react';
import Tasks from './Tasks';
import { Header } from './Header';
import AddTask from './AddTask';
// what is dependency array
const App = () => {
  const [toggle,setToggle] = useState(false);
  const [tasks, setTasks] = useState([]);
  // Toggeling the form
  // const 
  // Func to delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/data/${id}`,{
      method:'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }




  //Func to Add Tasks
  const addTask = async (task)=>{
    const res = await fetch('http://localhost:5000/data',
    {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(task),
    })
    const data= await res.json()
    setTasks([...tasks,data])
    // const id= Math.floor(Math.random()*1000)+1
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
  }

  //Fetch data
  const fetchTasks= async ()=>{
    const res = await fetch('http://localhost:5000/data')
    const data = await res.json()
    return data
  }

  //Use effect 
  useEffect(()=>{
    const getTasks= async ()=>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks()
  },[])

  return (
    <div className="App">
      <Header onAdd={()=>setToggle(!toggle)} toggle={toggle} />
      {toggle&&<AddTask onAdd={addTask}  />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  /> : 'No tasks to Show'}
    </div>
  );
};



export default App;


// export default App;
