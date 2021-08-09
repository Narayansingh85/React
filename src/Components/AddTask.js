import { useState  } from "react";
const AddTask=({onAdd})=> {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault()
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (

        <form className='Form' onSubmit={onSubmit}>
            <div className='Form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className='Form-control'>
                <label>Day</label>
                <input type='text' placeholder='Add day' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            
            <input type='submit' value='Save Task' id='Submit'/>
        </form>
        );
};

export default AddTask
