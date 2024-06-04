import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import LoginSignup from './pages/LoginSignup'
import BookSession from './pages/BookSession'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/book' element={<BookSession />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App