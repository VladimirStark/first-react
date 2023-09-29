import React, {useState} from 'react'

export default function AddTask() {
    console.log('Render');
    // title - State variable
    const [title, setTitle] = useState('')
  return (
    <div>
        <h3>Create new task</h3>
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log(title);
            setTitle('')
        }}>
            <label htmlFor="new_task_input">Task title:</label>
            <input 
            type="text" 
            name = 'title' 
            id='new_task_input'
            // Binding
            value={title}
            onChange={event => setTitle(event.target.value)}/>
            <button type="submit">Creat</button>
        </form>
    </div>
  )
}
