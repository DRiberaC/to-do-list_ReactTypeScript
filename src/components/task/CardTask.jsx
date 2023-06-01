import React from 'react'

export const CardTask = ({ setTasks, tasks, task }) => {

    const handleChange = (e) => {
        task.status = !task.status;
        const newArrayTasks = tasks.filter(taskItem => taskItem.id != task.id)

        setTasks([...newArrayTasks, task])
    }
    return (
        <form className='w-full md:w-1/2 py-3 px-5 mb-5 rounded-xl flex gap-3 hover:scale-105 hover:shadow-lg transition-all' id={task.id}>
            <input type="checkbox"
                checked={task.status}
                onChange={handleChange}
            />
            <div>
                <h3>{task.title}</h3>
                <p className='font-light'>{task.description}</p>
            </div>
        </form>
    )
}
