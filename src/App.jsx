import { useState } from 'react'

import './App.css'
import AddTask from './AddTask'
import TasksList from './TasksList'

function App() {
  // tasks - State variable
const [tasks, setTasks] = useState([  // initialState
  {
    id: 1,
    title: 'Learn JS',
    done: true,
  },
  {
   id: 2,
   title: 'Learn ReactJS',
   done: false, 
  },
])  
  return (
    // React fragment
    <>
      <h1>Task manager</h1>
      { /* AddTask component*/}
      <AddTask />
      {/* TasksList component */}
      <TasksList tasks={tasks} />
    </>
  )
}

export default App
