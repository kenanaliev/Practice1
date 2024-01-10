import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes} from 'react-router-dom' 
import Home from './layout/pages/Home'
import "./reset.scss"

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App

