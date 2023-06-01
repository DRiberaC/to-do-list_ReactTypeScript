import React, { useEffect, useState } from 'react'
import { MainLayout } from './layouts/MainLayout'
import { FormTask, ListCompletedTask, ListPendingTask } from './components/'

function App() {

  const [tasks, setTasks] = useState([]);

  const getAllTasksFromLS = () => {
    const tasksLS = JSON.parse(localStorage.getItem('tasks')) ?? [];
    setTasks(tasksLS);
  }

  useEffect(() => { getAllTasksFromLS() }, []);

  return (
    <MainLayout>
      <h2>Empieza a organizar tu dias</h2>
      {/* FORMULARIO PARA AGREGAR TAREAS */}
      <FormTask tasks={tasks} setTasks={setTasks} />

      {/* TAREAS PENDIENTES */}
      <ListPendingTask tasks={tasks} setTasks={setTasks} />

      {/* TAREAS COMPLETADAS */}
      <ListCompletedTask tasks={tasks} setTasks={setTasks} />
    </MainLayout>
  )
}

export default App