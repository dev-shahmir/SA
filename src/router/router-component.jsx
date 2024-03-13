import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Projects from '../projects'
import NavbarComponent from '../components/navbar'
import FotterComponent from '../components/fotter'
import Services from '../service'
import Contact from '../contact'
import Component from '../components/scroll'
import Cursor from '../components/cursor/cursor'
import Preloader from '../components/loader'





function RouterComponent() {
  const[scalling, setScalling] = useState(false)

  return (
    <Router>
        <NavbarComponent setScalling={setScalling} />
        <Cursor scalling={scalling} />
        <Preloader />
        <Component />
        <Routes>
            <Route path='/' element={<Home setScalling={setScalling}/>}/>
            <Route path='/about' element={<About setScalling={setScalling}  />}/>
            <Route path='/services' element={<Services setScalling={setScalling}/>}/>
            <Route path='/projects' element={<Projects setScalling={setScalling} />}/>
            <Route path='/contact' element={<Contact setScalling={setScalling}/>}/>
            <Route path='*' element={<h1>404 Page not Found</h1>} />
        </Routes>
        <FotterComponent />
    </Router>
  )
}

export default RouterComponent