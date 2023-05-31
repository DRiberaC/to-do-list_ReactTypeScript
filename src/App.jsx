import React from 'react'
import { MainLayout } from './layouts/MainLayout'
import { FormTask, CardTask } from './components/'

function App() {
  return (
    <>
      <MainLayout>
        <h2>Empieza a organizar tu dias</h2>
        <FormTask />
        <CardTask />
      </MainLayout>
    </>
  )
}

export default App