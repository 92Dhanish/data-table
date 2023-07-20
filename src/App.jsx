import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Viewcontact from './components/View/View'
import Header from './components/Header/Header'
import Edit from './components/Edit/Edit'
import Viewdata from './components/Viewdata/Viewdata'

function App() {
  return (
    <>
    <Header/>
    
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/View' element={<Viewcontact/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/viewdata' element={<Viewdata/>}></Route>


    </Routes>
    </>
  )
}

export default App