
import React from 'react'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Buses from './pages/Buses';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';

function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={<Home />}
      />

      <Route 
        path='/bookings'
        element={<Bookings />}
      />

      <Route 
        path='/profile'
        element={<Profile />}
      />

      <Route 
        path='/login'
        element={<Login />}
      />

      <Route 
        path='/register'
        element={<Register />}
      />

      <Route 
        path='/buses'
        element={<Buses />}
      />

      <Route 
        path='/contact'
        element={<Contact />}
      />

      <Route 
        path='/about'
        element={<About />}
      />

      <Route 
        path='/terms'
        element={<Terms />}
      />
    </Routes>
  )
}

export default App;