//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Games } from './pages/Games'
import { CharactersTHH } from './pages/CharactersTHH'
import { CharactersSD } from './pages/CharactersSD'
import { CharactersUDG } from './pages/CharactersUDG'
import { CharactersV3 } from './pages/CharactersV3'
import { Monokubs } from './pages/Monokubs'
import { MonoTypes } from './pages/MonoTypes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Games' element={<Games/>}></Route>
          <Route path='/CharactersTHH' element={<CharactersTHH/>}></Route>
          <Route path='/CharactersSD' element={<CharactersSD/>}></Route>
          <Route path='/CharactersUDG' element={<CharactersUDG/>}></Route>
          <Route path='/CharactersV3' element={<CharactersV3/>}></Route>
          <Route path='/Monokubs' element={<Monokubs/>}></Route>
          <Route path='/MonoTypes' element={<MonoTypes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
