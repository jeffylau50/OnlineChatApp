import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login.js'
import Chat from './chat.js'
import './app.css'
import { AuthProvider } from '../context/AuthContext';



function App() {
    return(
        <div>
        <Router>
        <AuthProvider>
        <Routes>
        <Route path='' element={<Login/>} />
        <Route path='/chat' element={<Chat />} />
        </Routes>
        </AuthProvider>

        </Router>
        </div>
    )
}

export default App;