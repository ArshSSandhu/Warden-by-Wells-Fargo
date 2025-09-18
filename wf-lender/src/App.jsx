import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Borrow from './pages/Borrow'
import Lend from './pages/Lend'
import MatchResults from './pages/MatchResults'
import InvestPool from './pages/InvestPool'
import Success from './pages/Success'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/matches" element={<MatchResults />} />
        <Route path="/invest" element={<InvestPool />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}
