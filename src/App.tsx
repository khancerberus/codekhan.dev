import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import './App.css'
import { Home } from './pages/home'

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<h1>PROYECTOS</h1>} />
        <Route path='/about' element={<h1>ACERCA DE MI</h1>} />

        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
