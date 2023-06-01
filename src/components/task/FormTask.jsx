import React, { useState } from 'react'

export const FormTask = ({ tasks, setTasks }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let newId = 1
        if (tasks.length == 0) {
            newId = 1;
        } else {
            newId = Math.max(...tasks.map(task => task.id));
        }

        const newTask = { title, description, status: false, id: newId + 1 }

        setTasks([...tasks, newTask])
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit} className='mt-5'>
            <div>
                <label className='grid'> Titulo </label>
                <input type="text" className='border border-gray-400 rounded-xl px-5 py-2'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label className='grid'> Descripcion </label>
                <textarea className='border border-gray-400 rounded-xl px-5 py-2'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <input
                type='submit'
                value='Agrega Tarea'
                className='bg-indigo-600 text-white p-3 w-full mt-4 rounded-xl cursor-pointer hover:bg-indigo-800 transition-all' />
        </form>
    )
}
