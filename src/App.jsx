import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Contact from './components/contact'
import Details from './components/details'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
