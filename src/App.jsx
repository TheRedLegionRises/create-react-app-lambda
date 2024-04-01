import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ReactDOM } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import ForgotPassword from '../pages/forgotPassword'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
