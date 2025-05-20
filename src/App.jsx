import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './ecommerce/About'
import Cart from './ecommerce/Cart'
import Catalogue from './ecommerce/Catalogue'
import Contact from './ecommerce/Contact'
import Login from './ecommerce/Login'
import Payment from './ecommerce/Payment'
import Register from './ecommerce/Register'
function App() {
  return (
    <Router>
      <div style={{ padding: '24px' }}>
        <nav style={{ marginBottom: '24px' }}>
        <Link to="/register" style={{ marginRight: '16px' }}>Register</Link>
          <Link to="/login" style={{ marginRight: '16px' }}>Login</Link>
          <Link to="/about" style={{ marginRight: '16px' }}>About</Link>
          <Link to="/catalogue" style={{ marginRight: '16px' }}>Catalogue</Link>
          <Link to="/cart" style={{ marginRight: '16px' }}>Cart</Link>
          <Link to="/payment" style={{ marginRight: '16px' }}>Payment</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

