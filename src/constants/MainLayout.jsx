import React from 'react'

export const MainLayout = ({ children }) => {

    return (
        <main className='main-h-screen p-5 md:p-8 flex flex-col justify-center items-center'>
            <h1>Mi listado de tareas</h1>
            {children}
        </main>
    )
}
