import React from 'react'

export default function TasksList(props) {
    console.log(props);
  return (
    <div>
        <h3>Tasks list:</h3>
        <ul>
            {
                props.tasks.map(task => {
                    // task = {id: 1, title: 'Learn JS', done: true, }
                    // task = {id: 2, title: 'Learn ReactJS', done: false, }
                    return <li key={task.id}>
                        {task.title}
                        
                    </li>
                })
            }
        </ul>
    </div>
  )
}
