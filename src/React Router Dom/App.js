import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './React Router Dom/Home'
import About from './React Router Dom/About'
import Contact from './React Router Dom/Contact'
import Services from './React Router Dom/Services'
function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
