import React from 'react'
import Phome  from '../pages/Phome' 
import PRendimiento from '../pages/PRendimiento'
import PCalendario from '../pages/PCalendario'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Phome/>} />
            <Route path='/rendimiento' element={<PRendimiento/>} />
            <Route path='/calendario' element={<PCalendario/>} />
        </Routes>
    </Router>
  )
}

export default Routing
