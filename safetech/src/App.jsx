import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import LoginSignup from './pages/LoginSignup'
import BookSession from './pages/BookSession'
import Contact from './components/Contact'
import Partners from './components/Partners'
import Offers from './components/Offers'
import Error404 from './pages/Error404'
import { Material } from './components/Material'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Error404 />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/material' element={<Material />} />
        <Route path='/book' element={<BookSession />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App