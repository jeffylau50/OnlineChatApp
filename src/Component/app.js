import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login.js'
import './app.css'

function App() {
    return(
        <div>
        <Router>
        <Routes>
        <Route path='' element={<Login/>} />    
        </Routes>
        </Router>
        </div>
    )
}

export default App;