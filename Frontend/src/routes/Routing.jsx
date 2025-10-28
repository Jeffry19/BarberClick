import React from 'react'
import Phome  from '../pages/Phome' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Phome/>} />
        </Routes>
    </Router>
  )
}

export default Routing
