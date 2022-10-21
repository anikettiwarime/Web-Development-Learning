import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Layout from './components/pages/Layout'
import LoginReg from './components/pages/auth/LoginReg';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            {/* Rendering Home as Root Child i.e Nav+Home on '/' route */}
            <Route index element={<Home />} /> 
            {/* Rendering Nav+Contact on '/contact' */}
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<LoginReg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App