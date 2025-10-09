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
import { THH } from './pages/Thh'
import { SDR } from './pages/Sdr'
import { UDG } from './pages/Udg'
import { DRV3 } from './pages/Drv3'
import { USC } from './pages/Usc'

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
          <Route path='/TriggerHappyHavoc' element={<THH/>}></Route>
          <Route path='/SuperDanganronpa' element={<SDR/>}></Route>
          <Route path='/UltraDespairGirls' element={<UDG/>}></Route>
          <Route path='/DanganronpaV3' element={<DRV3/>}></Route>
          <Route path='/UltimateSummerCamp' element={<USC/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
