import React from 'react'
import { CardTask } from './CardTask'

export const ListPendingTask = ({ tasks, setTasks }) => {
    const listTask = tasks.filter((task) => task.status == false);
    return (
        <>
            <h2>Tareas pendientes</h2>
            {
                listTask.map(task => (
                    <CardTask setTasks={setTasks} tasks={tasks} task={task} key={task.id} />
                ))
            }
        </>
    )
}
