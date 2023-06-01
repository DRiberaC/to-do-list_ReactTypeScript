import React from 'react'
import { CardTask } from './CardTask'

export const ListCompletedTask = ({ tasks, setTasks }) => {
    const listTask = tasks.filter((task) => task.status == true);
    return (
        <>
            <h2>Tareas completadas</h2>
            {
                listTask.map(task => (
                    <CardTask setTasks={setTasks} tasks={tasks} task={task} key={task.id} />
                ))
            }
        </>
    )
}
