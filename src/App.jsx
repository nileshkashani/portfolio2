import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Snowfall from 'react-snowfall'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Contact from './components/contact'
import Details from './components/details'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary selection:bg-accent-blue/30 overflow-hidden relative">
      <div className="opacity-20 pointer-events-none absolute inset-0 z-0">
        {/* <Snowfall snowflakeCount={100} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} /> */}
      </div>
      
      {/* Main content follows */}
      <div className="flex-1 relative z-10 flex flex-col">
        <BrowserRouter>   
          <AnimatePresence mode="wait">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/skills' element={<Skills/>}></Route>
                <Route path='/project' element={<Project/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/details' element={<Details/>}></Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
        
        <footer className="w-full bg-transparent border-t border-white/5 py-8 mt-auto relative z-10">
           <p className='text-secondary text-sm text-center font-medium'>
             Copyright &copy; Nilesh Kashani - {new Date().getFullYear()}
           </p>
        </footer>
      </div>
    </div>
  )
}

export default App
