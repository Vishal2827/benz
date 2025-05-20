import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App
