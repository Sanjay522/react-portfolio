// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import CustomCursor from './component/Cursor'


function App() {

  return (
    <>
    <BrowserRouter>
    <CustomCursor/>
      <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
