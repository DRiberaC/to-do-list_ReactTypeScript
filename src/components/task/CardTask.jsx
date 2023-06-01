import React from 'react'

export const CardTask = ({ setTasks, tasks, task }) => {

    const handleChange = (e) => {
        task.status = !task.status;
        const newArrayTasks = tasks.filter(taskItem => taskItem.id != task.id)

        const AllTask = [...newArrayTasks, task];

        setTasks(AllTask)

        localStorage.setItem('tasks', JSON.stringify(AllTask));

    }

    /* Metodo para eliminar una tarea */
    const handleDelete = (e) => {
        e.preventDefault();

        const newArrayTasks = tasks.filter(taskItem => taskItem.id != task.id)

        setTasks(newArrayTasks)

        localStorage.setItem('tasks', JSON.stringify(newArrayTasks));

    }

    return (
        <form className='w-full md:w-1/2 py-3 px-5 mb-5 rounded-xl bg-gray-50 flex justify-between items-center hover:scale-105 hover:shadow-lg hover:bg-gray-100 transition-all' id={task.id}>
            <div>
                <input type="checkbox"
                    checked={task.status}
                    onChange={handleChange}
                />
                <div>
                    <h3>{task.title}</h3>
                    <p className='font-light'>{task.description}</p>
                </div>
            </div>
            <div>
                <button onClick={handleDelete} className='p-2 bg-red-500 text-white rounded-md hover:bg-red-600'>Eliminar</button>
            </div>
        </form>


    )
}
