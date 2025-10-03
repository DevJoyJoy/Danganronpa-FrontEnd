//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from '../pages/Home'
import { Characters } from '../pages/Characters'
import { Character } from '../pages/Character'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Characters' element={<Characters/>}></Route>
          <Route path='/Characters/:id' element={<Character/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
