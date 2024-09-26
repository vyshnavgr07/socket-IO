import React from 'react'
import Chat from './pages/Chat'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
<Route  path='/home'   element={<Home/>}   />
<Route  path='/login'   element={<Login/>}   />
<Route  path='/chat'   element={<Chat/>}   />
      </Routes>


    </div>
  )
}

export default App
