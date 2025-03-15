import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/Home/About.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<About/>}/>
    </Routes>
  </BrowserRouter>
)
